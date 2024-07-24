(function($) {
  "use strict";

  // Navigation
  const menuIcon = document.querySelector(".menu-icon");
  const body = document.body;

  menuIcon.addEventListener("click", () => {
    body.classList.toggle("nav-active");
  });
  
  //Bubble naviagtion
  document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelector(".projects");
    const bubbles = document.querySelectorAll(".bubble");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    let currentIndex = 0;
  
    function updateBubbles(index) {
      bubbles.forEach((bubble) => bubble.classList.remove("active"));
      if (bubbles[index]) {
        bubbles[index].classList.add("active");
      }
    }
  
    function scrollToIndex(index) {
      const scrollAmount = projects.clientWidth * index;
      projects.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      updateBubbles(index);
    }
  
    bubbles.forEach((bubble, index) => {
      bubble.addEventListener("click", () => {
        currentIndex = index;
        scrollToIndex(index);
      });
    });
  
    leftArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToIndex(currentIndex);
      }
    });
  
    rightArrow.addEventListener("click", () => {
      if (currentIndex < bubbles.length - 1) {
        currentIndex++;
        scrollToIndex(currentIndex);
      }
    });
  
    // Initialize the first bubble as active
    if (bubbles.length > 0) {
      updateBubbles(0);
    }
  });

})(jQuery);
