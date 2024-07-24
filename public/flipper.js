document.addEventListener("DOMContentLoaded", function () {
    const fliper = document.querySelector(".fliper");
    const words = ["Full-Stack", "Web3", "Cybersecurity"];
    let currentWordIndex = 0;
  
    setInterval(() => {
      fliper.classList.add("flipping");
      setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        fliper.textContent = words[currentWordIndex];
        fliper.classList.remove("flipping");
      }, 300); // 300ms matches half of the transition time for a smooth flip
    }, 3000); // Change word every 3 seconds
  });
  