const yearEl=document.getElementById('year');if(yearEl)yearEl.textContent=new Date().getFullYear();
const menuBtn=document.querySelector('.menu');const navLinks=document.querySelector('.nav-links');if(menuBtn)menuBtn.addEventListener('click',()=>{navLinks.style.display=navLinks.style.display==='flex'?'':'flex'});

const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal');io.unobserve(e.target)}})},{threshold:.2});
document.querySelectorAll('[data-animate]').forEach(el=>io.observe(el));

const slides=document.querySelector('.slides');const dots=document.querySelector('.dots');let idx=0;const total=slides?slides.children.length:0;
function goto(i){if(!slides)return;idx=(i+total)%total;slides.style.transform=`translateX(-${idx*100}%)`;[...dots.children].forEach((d,k)=>d.classList.toggle('active',k===idx))}
if(dots&&total){for(let i=0;i<total;i++){const b=document.createElement('button');b.addEventListener('click',()=>goto(i));dots.appendChild(b)}goto(0);setInterval(()=>goto(idx+1),5000)}

document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('mousemove',e=>{const b=card.getBoundingClientRect();const x=(e.clientX-b.left)/b.width;const y=(e.clientY-b.top)/b.height;const rx=(.5-y)*10;const ry=(x-.5)*10;card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`});card.addEventListener('mouseleave',()=>{card.style.transform=''});});

const counters=[...document.querySelectorAll('.kpi-num')];const io2=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target;const end=parseInt(el.dataset.count,10)||0;let cur=0;const step=Math.ceil(end/60);const t=setInterval(()=>{cur+=step;if(cur>=end){cur=end;clearInterval(t)}el.textContent=cur},16);io2.unobserve(el)}})},{threshold:.6});counters.forEach(c=>io2.observe(c));
