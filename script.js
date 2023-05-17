"use sctrict";

const numbersOfFilms = prompt("How many films have you already watched?");
let array = [];
let movie = {};
let actor = {};
const personalMovieDB = {
    count: numbersOfFilms,
    movies: movie,
    actors: actor,
    genres: array,
    privat: false

};

for(let i = 0; i < numbersOfFilms; i++){
    const nameMovie = prompt("How the Movie call?");
    const gradeForMovie = prompt("How much do you rate?");
    movie[nameMovie] = gradeForMovie;
}

console.log(personalMovieDB);

