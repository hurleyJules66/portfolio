window.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 1;
  
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const themeToggle = document.getElementById("theme-toggle");
  
    // Mobile nav toggle
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Theme toggle
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      themeToggle.textContent = isLight ? "🌞" : "🌙";
      
// // Change text for elements with class .light
//   document.querySelectorAll(".light").forEach(el => {
//     el.textContent = isLight ? "lightHERO" : "darkHERO";
//   });
    });
  });
  