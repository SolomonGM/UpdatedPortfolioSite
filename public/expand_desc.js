document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".toggle-description");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const description = this.nextElementSibling;
        description.classList.toggle("expanded");
        this.textContent = description.classList.contains("expanded") ? "Hide" : "Show More";
      });
    });
  });
  