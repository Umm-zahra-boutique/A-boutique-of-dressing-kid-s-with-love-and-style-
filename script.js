// Mobile nav toggle
(function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=> nav.classList.toggle('open'));
  }
  const toggleShop = document.getElementById('navToggleShop');
  const navShop = document.getElementById('navShop');
  if(toggleShop && navShop){
    toggleShop.addEventListener('click', ()=> navShop.classList.toggle('open'));
  }
})();

// Hide bottom bar while scrolling down (small UX improvement)
(function(){
  const bar = document.querySelector('.mobile-bottom-bar');
  if(!bar) return;
  let last = window.scrollY;
  let ticking = false;
  window.addEventListener('scroll', ()=> {
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(()=> {
      const now = window.scrollY;
      if(now > last && now > 60){
        // scrolling down
        bar.style.transform = 'translateY(80px)';
        bar.style.opacity = '0';
      } else {
        bar.style.transform = 'translateY(0)';
        bar.style.opacity = '1';
      }
      last = now;
      ticking = false;
    });
  }, {passive:true});
})();
