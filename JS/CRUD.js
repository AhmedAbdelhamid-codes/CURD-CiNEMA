// ============up to top for body=========== //
let btn_up_body = document.getElementById("btn-up_body")

window.addEventListener("scroll",function(){
  
  window.scrollY > 200? btn_up_body.classList.add("show") : btn_up_body.classList.remove("show") 
  
})

if(btn_up_body){
btn_up_body.addEventListener("click",function(){
       
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
})
}


// ============= start CRUD============== //

let tittle = document.getElementById("tittle");
let category = document.getElementById("category");
let year = document.getElementById("year");
let type = document.getElementById("type");
let Description = document.getElementById("Description");
let fileinput = document.getElementById("fileinput");
let add_card = document.getElementById("add-card");
let movies = [];
let index;


if(localStorage.getItem("movies")){
    movies = JSON.parse(localStorage.getItem("movies"))
    display(movies)
}

// =============creat============== //

add_card.addEventListener("click",function(){

   let reader = new FileReader();

  reader.addEventListener("load",function(){
       
    let movie = {
      tittle : tittle.value,
      category : category.value,
      year : year.value,
      type : type.value,
      Description : Description.value,
      imge : reader.result
    }
      
    movies.push(movie)
    localStorage.setItem("movies",JSON.stringify(movies))
    console.log(JSON.parse(localStorage.getItem("products")));
   
    display(movies)
   
    reset() 
  })

  reader.readAsDataURL(fileinput.files[0])
})


// =========reset form====== \\

function reset(){
    tittle.value = ""
    category.value = ""
    year.value = ""
    type.value = ""
    Description.value = ""
    fileinput.value = "";
}


// =============Read============== //

function display(arrtarget){

 let cartona = "";

  for(let i = 0; i < arrtarget.length; i++){
    
    cartona += `
       <!-- Card -->
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="movie-card">
                    <div class="movie-image">
                        <img src="${arrtarget[i].imge}" alt="movie">
                    </div>
                    <div class="movie-content">
                        <div class="tittle-movie n-items-center -wrap">
                          <h3>${arrtarget[i].tittle}</h3>
                          <div class="type">
                             ${arrtarget[i].type}
                          </div>
                        </div>
                        <div class="year">
                            ${arrtarget[i].year}
                        </div>
                        <div class="category">
                            ${arrtarget[i].category} 
                        </div>
                        <p>
                        ${arrtarget[i].Description}
                        </p>
                        <div class="card-buttons d-flex gap-2 mt-4">
                            <button data-index="${arrtarget.length < movies.length? arrtarget[i].oldindex : i }" class="Update btn btn-warning text-white w-50">
                                <i class="bi bi-pencil-fill"></i>
                                Update
                            </button>
                            <button data-index="${arrtarget.length < movies.length? arrtarget[i].oldindex : i}" class="Delete btn btn-danger w-50">
                                <i class="bi bi-trash-fill"></i>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    `
}

document.getElementById("show").innerHTML = cartona
}

// =============Delete============== //

let cards_container = document.getElementById("show");

cards_container.addEventListener("click",function(e){
 
    if(e.target.classList.contains("Delete")){
        Delete(e.target)
    }

    if(e.target.classList.contains("Update")){
        return_values(e.target)
    }

})

function Delete(btn){

  index = btn.dataset.index;

  movies.splice(index,1);

  localStorage.setItem("movies",JSON.stringify(movies))
  
    display(movies)

}


// =============update============== //

function return_values(btn){

    index = btn.dataset.index;

    tittle.value = movies[index].tittle
    category.value = movies[index].category
    year.value = movies[index].year
    type.value = movies[index].type
    Description.value = movies[index].Description

    window.scrollTo({
        top: 0,
        behavior : "smooth"
    })

    document.getElementById("add-card").classList.add("d-none")
    document.getElementById("add-update").classList.remove("d-none")

}

let update_btn =  document.getElementById("add-update")


update_btn.addEventListener("click",function(){
    
    movies[index].tittle = tittle.value
    movies[index].category = category.value
    movies[index].year = year.value
    movies[index].type = type.value
    movies[index].Description = Description.value
 
   localStorage.setItem("movies",JSON.stringify(movies))

   console.log(JSON.parse(localStorage.getItem("products")));

    document.getElementById("add-card").classList.remove("d-none")
    document.getElementById("add-update").classList.add("d-none")
   
    reset()
   display(movies)
})


// =============search============== //

let searchinput = document.getElementById("search");

searchinput.addEventListener("input", function(e){

    search(e.target.value);

});

function search(search_value){

let listsearch = []

for(let i = 0; i < movies.length; i++){
    
    if(movies[i].tittle.toLowerCase().includes(search_value.toLowerCase())){
      
        listsearch.push(movies[i])

        movies[i].oldindex = i;
    }
}
 display(listsearch)
}








