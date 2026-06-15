window.addEventListener("scroll", function() {
  let navbar = document.getElementById("nav");

  if (window.scrollY > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});