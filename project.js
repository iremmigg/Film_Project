const form = document.getElementById("film-form");
const titleElement =document.getElementById("title");
const directorElement= document.getElementById("director");
const urlElement= document.getElementById("url");
const cardBody =document.querySelectorAll(".card-body")[1];//yani 2. card-body
const clear = document.getElementById("clear-films");
//UI objesini başlat
const ui = new UI();

//Storage Objesi 
const storage = new Storage();

//Tüm eventleri yükleme
evetListeners();

function evetListeners(){

    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = storage.getFilmsFromStorage ();
        ui.loadAllFilms(films);
    })
}

 cardBody.addEventListener("click",deleteFilm);
 clear.addEventListener("click",clearAllFilms);


function addFilm(e){
    const title =titleElement.value;
    const director =directorElement.value;
    const url =urlElement.value;
    
    if(title=="" || director=="" ||url==""){
        //Hata mesajı 
        
        ui.displayMessage("Tüm alanlari doldurun...", "danger")
    }
    else{
        //yeni film
        const newFilm = new Film(title, director, url) 

        ui.addFilmToUI(newFilm);//Arayüze film ekleme
        storage.addFilmToStorage(newFilm); //Storage'a Film Ekleme
       
        ui.displayMessage("Film başariyla eklendi :)", "success")

        
    }


    ui.clearInputs(titleElement,urlElement,directorElement);
    
    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id==="delete-film"){

        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        ui.displayMessage("Film başariyla silindi...", "info")
    }
    
}

function clearAllFilms(e){
    if(confirm("Tümünü temizlemek istediğnizie emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
   
}