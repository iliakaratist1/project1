const  = Films("./Films");
const FilmJanre = require("./film.cat");
const Thriller = require("./film.cat");

const Begin  = new Films("thriller", "2010", "LA");
const Lost = new Films("thriller", "2000", "Russia");
const Batman = new Films("thriller", "2004", "USA");
const Hobbit = new Films("thriller", "2012", "USA");
const b1408 = new Films("FilmJanre", "2006", "USA");
const Kitchen = new Films("thriller", "2004", "CNDR");
const Godzilla = new Films("FilmJanre", "2016", "Moldova");
const Love = new Films("thriller", "2010", "India");
const Noise = new Films("FilmJanre", "2002", "USA");
const i21Brige = new Films("thriller", "2009", "Somali");



console.log(b1408.getDescription());
console.log("-----------------------")
console.log(i21Brige.getDescription());

let FilmJanre = new FilmJanre("thriller", "2006", "USA");
console.log(FilmJanre.getDescription());
console.log("-----------------------")

const i21Brige = new i21Brige("blockbuster", "2009", "Moldova");
console.log(businessSeat.getDescription());
console.log("-----------------------")

let arr = new Array();
let arr = [Begin, Lost, Batman, Hobbit, b1408, Kitchen, Godzilla, Love, Noise, i21Bridge]
 arr.sort([year]);