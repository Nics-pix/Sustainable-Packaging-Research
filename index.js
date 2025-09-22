// Toggle mobile nav
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Toggle References
function toggleReferences() {
  const box = document.getElementById("references-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // optional: stop observing after first reveal
      }
    });
  },
  {
    threshold: 0.1, // trigger when 20% of section is visible
  }
);

// Observe all sections
sections.forEach((section) => observer.observe(section));
