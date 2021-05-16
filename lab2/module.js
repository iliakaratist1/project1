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