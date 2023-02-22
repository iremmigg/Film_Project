const form = document.getElementById("film-form");
const titleElement =document.getElementById("title");
const directorElement= document.getElementById("director");
const urlElement= document.getElementById("url");
const cardBody =document.querySelectorAll(".card-body")[1];//yani 2. card-body
const clear = document.getElementById("clear-films");

//Tüm eventleri yükleme
evetListeners();

function evetListeners(){

    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = Storage.getFilmsFromStorage ();
        UI.loadAllFilms(films);
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
        
        UI.displayMessage("Tüm alanlari doldurun...", "danger")
    }
    else{
        //yeni film
        const newFilm = new Film(title, director, url) 

        UI.addFilmToUI(newFilm);//Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); //Storage'a Film Ekleme
       
        UI.displayMessage("Film başariyla eklendi :)", "success")

        
    }


    UI.clearInputs(titleElement,urlElement,directorElement);
    
    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id==="delete-film"){

        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        UI.displayMessage("Film başariyla silindi...", "info")
    }
    
}

function clearAllFilms(e){
    if(confirm("Tümünü temizlemek istediğnizie emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
   
}