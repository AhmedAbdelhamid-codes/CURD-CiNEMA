window.addEventListener("scroll", function() {
  let navbar = document.getElementById("nav");

  if (window.scrollY > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

let shows = document.querySelectorAll(".show")


let observer = new IntersectionObserver(function(enters){

  enters.forEach(function(entery){
    if(entery.isIntersecting){
      entery.target.classList.add("animate")
    }

  })




})

shows.forEach(function(show) {
  
  observer.observe(show)
});