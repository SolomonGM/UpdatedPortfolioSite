document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const switchElement = document.getElementById("switch");
  
    // Check localStorage for theme
    const theme = localStorage.getItem('theme');
    console.log('Loaded theme:', theme); // Debugging line
  
    if (theme === 'light') {
      body.classList.add('light');
      if (switchElement) {
        switchElement.classList.add('switched');
      }
    }
  
    if (switchElement) {
      switchElement.addEventListener('click', function() {
        if (body.classList.toggle('light')) {
          localStorage.setItem('theme', 'light');
          switchElement.classList.add('switched');
          console.log('Theme set to light'); // Debugging line
        } else {
          localStorage.removeItem('theme');
          switchElement.classList.remove('switched');
          console.log('Theme set to dark'); // Debugging line
        }
      });
    }
  });
  