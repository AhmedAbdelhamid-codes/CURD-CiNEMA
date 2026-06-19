window.addEventListener("scroll", function() {
  let navbar = document.getElementById("nav");

  if (window.scrollY > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

let shows = document.querySelectorAll(".show")
let devices = document.getElementById("devices")
let devices_content = document.getElementById("devices-content")
let devices_imge = document.getElementById("devices-imge") 


let observer = new IntersectionObserver(function(enters){
  

  enters.forEach(function(entery){

    let animation = entery.target.dataset.animation

    if(animation === "devices"){
      if(entery.isIntersecting){
        if(window.innerWidth > 1199){
          devices_content.classList.add("devices-animate-right")
          devices_imge.classList.add("devices-animate-left")
        }else{
           entery.target.classList.add("animate")
        }
      }  
    }
    
    if(animation === "animate"){
      if(entery.isIntersecting){
       entery.target.classList.add("animate")
      } 
    }

  })
})


observer.observe(devices);

shows.forEach(function(show) {
  observer.observe(show)
});


let btns = document.querySelectorAll(".Questions-btn");

btns.forEach(function(btn){
  
  btn.addEventListener("click",function(){
      
    let box = btn.parentElement;

    box.classList.toggle("show")
   
  })
})

let btn_up = document.getElementById("btn-up_footer")

btn_up.addEventListener("click",function(){

  window.scrollTo({
    top: 0,
    behavior:"smooth"
  })
})


let btn_up_body = document.getElementById("btn-up_body")

window.addEventListener("scroll",function(){
  
  window.scrollY > 200 && window.scrollY < 3500? btn_up_body.classList.add("show") : btn_up_body.classList.remove("show") 
  
})

  btn_up_body.addEventListener("click",function(){
       
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  })