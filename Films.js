function Films(janre, year, country) {
    this.janre = janre;
    this.country = country;
    this.year = year;
}

Films.prototype.getJanre = function () {
    return this.janre;
}

Films.prototype.getDescription = function () {
    return this.janre + " " + this.year + " " + this.country;
}

module.exports = Films;

