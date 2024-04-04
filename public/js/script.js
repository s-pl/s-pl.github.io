document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
      sections.forEach(section => {
        let sectionPosition = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (sectionPosition < screenHeight) {
          section.classList.add('active');
        }
      });
    });
  });
  $(document).ready(function(){
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // Create a scene for each section
    $('.section').each(function(){
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.9 // Trigger animation when section enters 90% of viewport
      })
      .setClassToggle(this, 'fade-in') // Add fade-in class to section when scrolled into view
      .addTo(controller);
    });
  });