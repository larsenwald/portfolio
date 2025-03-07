 // Wait for DOM to load
 document.addEventListener("DOMContentLoaded", function () {
    // Hide loader after 2.5 seconds
    setTimeout(function () {
      document.querySelector(".loader").classList.add("hidden");
    }, 2500);

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;
    const icon = darkModeToggle.querySelector("i");
    if (localStorage.getItem("darkMode") === "true") {
      body.classList.add("dark-mode");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
    darkModeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("darkMode", "true");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("darkMode", "false");
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          });
          if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
          }
        }
      });
    });
  });