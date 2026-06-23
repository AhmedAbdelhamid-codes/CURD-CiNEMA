// =============navbar============ //
window.addEventListener("scroll", function() {
  let navbar = document.getElementById("nav");

  if (window.scrollY > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});


// ===========animation for sections============ //

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

if(devices){
observer.observe(devices);
}

shows.forEach(function(show) {
  observer.observe(show)
});


// ============ animation for FAQ Section ============= //
let btns = document.querySelectorAll(".Questions-btn");

btns.forEach(function(btn){
  
  btn.addEventListener("click",function(){
      
    let box = btn.parentElement;

    box.classList.toggle("show")
   
  })
})


// ============up to top for footer=========== //
let btn_up = document.getElementById("btn-up_footer")


if(btn_up){
btn_up.addEventListener("click",function(){

  window.scrollTo({
    top: 0,
    behavior:"smooth"
  })
})
}

// ============up to top for body=========== //
let btn_up_body = document.getElementById("btn-up_body")

window.addEventListener("scroll",function(){
  
  window.scrollY > 200 && window.scrollY < 3500? btn_up_body.classList.add("show") : btn_up_body.classList.remove("show") 
  
})

if(btn_up_body){
btn_up_body.addEventListener("click",function(){
       
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
})
}


// =========== Favorite Movie Toggle============//
let btn_ghosts = document.querySelectorAll(".ghost-btn")

btn_ghosts.forEach(function(btn){

  btn.addEventListener("click",function(){
    
   let icon = btn.querySelector(".icon")

    btn.classList.toggle("bg-white")
    icon.classList.toggle("text-dark")
    icon.classList.toggle("fa-x")
    icon.classList.toggle("fa-plus")

  })

})


// =======add cards from CRUD page====== \\
let arr = []

if(localStorage.getItem("movies")){

arr = JSON.parse(localStorage.getItem("movies"))

}


// ======array for arabic movies====== \\
let arabicMovies = [];

for(let i = 0; i < arr.length; i++){

    if(arr[i].type === "افلام عربي"){
        arabicMovies.push(arr[i]);
    }

}

// ======array for foreign films====== \\
let foreignFilms = []

for(let i = 0; i < arr.length; i++){

  if(arr[i].type === "افلام اجنبي"){
        foreignFilms.push(arr[i]);
  }
}

// ======array for arabic series====== \\
let arabicSeries = [];

for(let i = 0; i < arr.length; i++){

  if(arr[i].type === "مسلسلات عربي"){
        arabicSeries.push(arr[i]);
  }
}

// ======array for foreign series====== \\
let foreignSeries = [];

for(let i = 0; i < arr.length; i++){

  if(arr[i].type === "مسلسلات اجنبي"){
        foreignSeries.push(arr[i]);
  }
}

// =======display cards in their section======= \\
display(arabicMovies, "arabicFilmsCards");

display(foreignFilms, "foreignFilmsCards");

display(arabicSeries, "arabicSeriesCards");

display(foreignSeries, "foreignSeriesCards");


function display(array, position){
  let cartona = "";

  for(let i = 0; i < array.length; i++){
    
    cartona += `
       <!-- Card -->
        <div class="TV-card position-relative rounded-4">
           <div class="TV-imge w-100 h-100 overflow-hidden rounded-4">
              <img src="${array[i].imge}" class="rounded-3" alt="poster">
            </div>
            <ul class="TV-content list-unstyled">
              <li class="shret">1080p</li>
              <li class="year-home">${array[i].year}</li>
            </ul>
            <ul class="TV-info position-absolute top-0 end-0 d-flex justify-content-between align-items-center flex-column w-100 h-100 rounded-4 list-unstyled">
              <li class="film bg-body">${array[i].type}</li>
              <li class="icon text-white d-flex justify-content-center align-items-center pe-1"><i class="fa-solid fa-play"></i></li>
              <li class="title fw-bold text-center text-white"> ${array[i].tittle} 
                <span class="d-block">${array[i].category}</span>
              </li>
            </ul>
        </div>
    `
}

cartona += `
        <div class="TV-btns">
         <button class="next"><i class="fa-solid fa-chevron-left"></i></button>
         <button class="pre disabled"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
`
document.getElementById(position).innerHTML = cartona
}


// =====buttons next and pre for slider cards===== \\
let cards = document.querySelectorAll(".TV-cards")

if(cards){
  cards.forEach(function(card){
   
    let next = card.querySelector(".next");
    let pre = card.querySelector(".pre");

    next.addEventListener("click", function(){
 
    card.scrollBy({
     left: -260,
     behavior: "smooth"
    }) 

   if(Math.abs(card.scrollLeft) + card.clientWidth  >= card.scrollWidth ){
      next.classList.add("disabled")
   }else{
     next.classList.remove("disabled")
   }

   if(card.scrollLeft <= 0){
      pre.classList.remove("disabled")
   }
   })

   pre.addEventListener("click", function(){
 
     card.scrollBy({
      left: 260,
      behavior: "smooth"
     })


   if(card.scrollLeft >= -260){
      pre.classList.add("disabled")
    }else{
      pre.classList.remove("disabled")
    }

   if(card.scrollLeft <= 0){
      next.classList.remove("disabled")
   }
   })
  })
}
