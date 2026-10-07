// メニューの開閉（スマホ）
(function(){var b=document.querySelector('.nav-toggle'),n=document.querySelector('.gnav');if(!b||!n)return;
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open')})});})();
// このページ：見ている箱をバーで光らせる
(function(){var links=document.querySelectorAll('.stepnav a[data-step]');if(!links.length||!('IntersectionObserver' in window))return;
var cur=null;function set(id){if(cur===id)return;cur=id;links.forEach(function(a){a.classList.toggle('on',a.dataset.step===id)});}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)set(e.target.id)})},{rootMargin:'-28% 0px -62% 0px',threshold:0});
links.forEach(function(a){var el=document.getElementById(a.dataset.step);if(el)io.observe(el)});})();
// 電子黒板に映す：問いを画面いっぱいに出す（Escかボタンでとじる）
(function(){var p=document.getElementById('proj'),body=document.getElementById('proj-body');if(!p)return;
function close(){p.hidden=true;if(document.fullscreenElement)document.exitFullscreen()}
document.querySelectorAll('.btn-proj').forEach(function(b){b.addEventListener('click',function(){body.innerHTML=b.dataset.proj;p.hidden=false;if(p.requestFullscreen)p.requestFullscreen().catch(function(){})})});
p.querySelector('.proj-close').addEventListener('click',close);document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});})();
