(function($) {
    "use strict";
  
    // Page cursors
    const cursor = document.getElementById("cursor");
    const cursor2 = document.getElementById("cursor2");
    const cursor3 = document.getElementById("cursor3");
  
    document.body.addEventListener("mousemove", (event) => {
      const { clientX: x, clientY: y } = event;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      cursor2.style.left = `${x}px`;
      cursor2.style.top = `${y}px`;
      cursor3.style.left = `${x}px`;
      cursor3.style.top = `${y}px`;
    });
  
    const hoverTargets = document.querySelectorAll(".hover-target");
    hoverTargets.forEach(target => {
      target.addEventListener("mouseover", () => {
        cursor2.classList.add("hover");
        cursor3.classList.add("hover");
      });
  
      target.addEventListener("mouseout", () => {
        cursor2.classList.remove("hover");
        cursor3.classList.remove("hover");
      });
    });
  
    // Navigation
    const menuIcon = document.querySelector(".menu-icon");
    const body = document.body;
  
    menuIcon.addEventListener("click", () => {
      body.classList.toggle("nav-active");
    });
  
    // Switch light/dark
    $("#switch").on('click', function () {
      $("body").toggleClass("light");
      $("#switch").toggleClass("switched");
    });
  
  })(jQuery);
  