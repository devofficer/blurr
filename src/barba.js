barba.init();
gsap.registerPlugin(ScrollTrigger);

function animateFrom(elem) {
    gsap.fromTo(elem, {x: -300, y: 0, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray("section").forEach(function(elem) {
      hide(elem);
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  

const open_btn = document.querySelector(".open-menu-button");
const close_btn = document.querySelector(".close-menu-button");
const menu = document.querySelector(".mobile-nav");

open_btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
    gsap.fromTo(menu, {x: 300, y: 0, autoAlpha: 0}, {
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
    });
});

close_btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
