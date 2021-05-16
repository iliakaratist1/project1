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
        return this this.type
    }
}