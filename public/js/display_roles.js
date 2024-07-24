document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-description");
    
    toggleButtons.forEach(button => {
      button.addEventListener("click", function() {
        const description = this.nextElementSibling;
        description.classList.toggle("expanded");
        if (description.classList.contains("expanded")) {
          this.textContent = "Show Less";
        } else {
          this.textContent = "Show More";
        }
      });
    });
  });
  