class Films {
    constructor(janre, year, country){
    this.janre = janre;
    this.country = country;
    this.year = year;
    }
    getDescription(){
        return this.janre+' '+this.year+' '+this.country
    }
}

class Serial extends Films{
    constructor(janre, year, country,type){
        super(janre, year, country)
        this.type=type

    }
    gettype(){
        return this.type
    }
}
class Cartoons extends Serial{
    constructor(country, year, price){
    super(country, year)
    this.price = price
    }
    getprice(){
        return this.price
    }
}
class OnlineCinema extends Cartoons{
    constructor(country, year, price){
        super(country, year,price)
        this.price=price-10%
    }
    getprice(){
        return this.price
    }
}
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

let arr = new Array();
let arr = [Begin, Lost, Batman, Hobbit, b1408, Kitchen, Godzilla, Love, Noise, i21Bridge]
 arr.sort([year]);