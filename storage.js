class  Storage{


    static addFilmToStorage (newFilm) {
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
    
        localStorage.setItem("films", JSON.stringify(films));
        //stringe çevi
    
    }
    static getFilmsFromStorage () {
    
        let films;
        if (localStorage.getItem("films") === null) {
            //films karşılık gelen bir değer var mı 
            films = [];
    
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
            //array olarak almış olduk.
    
    
        }
        return films;
    }
    static deleteFilmFromStorage(filmTitle){
        let films = this. getFilmsFromStorage();
    
        films.forEach(function(film,index){ //film = objects , index =js otomatik gönderiyor.
            if(film.title=== filmTitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    
    }
    static SclearAllFilmsFromStorage(){
        
        localStorage.removeItem("films")
    }

}
