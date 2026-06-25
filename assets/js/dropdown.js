// Select all dropdown buttons
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector(".dropbtn");
  const menu = dropdown.querySelector(".dropdown-menu");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    // close other dropdowns
    document.querySelectorAll(".dropdown-menu").forEach(m => {
      if (m !== menu) m.classList.remove("show");
    });

    // toggle current dropdown
    menu.classList.toggle("show");
  });
});

// close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.classList.remove("show");
    });
  }
});