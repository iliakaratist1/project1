const Films = require('./janre');

function JanreFilm(janre, year, country, buget) {
    Seat.call(janre, year, country);
    this.type = "JanreFilm";
    this.buget = buget;
}

JanreFilm.prototype = new Films();
JanreFilm.prototype.constructor = Films;


//=====================================================

function Thriller(janre, year, country, buget) {
    Seat.call(janre, year, country);
    this.type = "Thriller";
    this.buget = buget;
}

JanreFilm.prototype = new Films();
JanreFilm.prototype.constructor = Films;

//========================================================

module.exports = {
    JanreFilm: JanreFilm,
    Thriller: Thriller
};