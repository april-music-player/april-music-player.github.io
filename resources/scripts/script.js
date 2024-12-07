document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const navbarHeight = document.querySelector("nav").offsetHeight;
  const navLinks = document.querySelectorAll("nav a");

  // Check if dark mode is saved in localStorage or set it by default
  if (
    !localStorage.getItem("theme") ||
    localStorage.getItem("theme") === "dark"
  ) {
    body.classList.add("dark-mode"); // Set dark mode by default
  }

  // Toggle theme on button click
  document
    .querySelector(".theme-toggle")
    .addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      // Save the current theme in localStorage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

  // Smooth scrolling with offset for each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    });
  });
});
