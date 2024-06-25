const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
 
  
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  
    if (isMobile) {
      
      scrollToTopBtn.style.display = "none";
    } else {
     
      scrollToTopBtn.style.display = "block";
    }
  } else {
    
    scrollToTopBtn.style.display = "none";
  }
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}