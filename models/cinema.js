const { beforeEach } = require("mocha");

const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  let filmTitles = [];
  this.films.forEach(film => filmTitles.push(film.title));
  return filmTitles;
};

Cinema.prototype.findFilmByTitle = function (title) {
  let film = this.films.find(film => film.title === title);
  return film;
};

Cinema.prototype.filterByGenre = function (genre) {
  let filteredFilms = this.films.filter(film => film.genre === genre);
  return filteredFilms;
}

Cinema.prototype.isYear = function (year) {
  let result = this.films.some(film => film.year === year);
  return result;
}

Cinema.prototype.overLength = function (length) {
  let result = this.films.every(film => film.length > length);
  return result;
}

module.exports = Cinema;