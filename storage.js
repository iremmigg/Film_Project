function Storage() {

}
Storage.prototype.addFilmToStorage = function(newFilm) {
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
    //stringe çevi

}
Storage.prototype.getFilmsFromStorage = function () {

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
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this. getFilmsFromStorage();

    films.forEach(function(film,index){ //film = objects , index =js otomatik gönderiyor.
        if(film.title=== filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));

}
Storage.prototype.clearAllFilmsFromStorage = function(){
    
    localStorage.removeItem("films")
}