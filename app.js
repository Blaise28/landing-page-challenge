const mobileNavBar = document.getElementById("offcanvasNavbar");
const humbergerButton = document.querySelector(".navbar-toggler");
const closeButton = document.querySelector(".offcanvas-header .btn");

humbergerButton.addEventListener("click", () => {
  const overlay = document.querySelector(".offcanvas-backdrop");
  overlay.addEventListener("click", () => {
    humbergerButton.classList.remove("d-none");
  });
  humbergerButton.classList.add("d-none");
});

closeButton.addEventListener("click", () => {
  humbergerButton.classList.remove("d-none");
});
