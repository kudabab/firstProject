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
const nameMovie = prompt("One of the last movies you watched?");
const gradeForMovie = prompt("How much do you rate?");
movie[nameMovie] = gradeForMovie;

console.log(personalMovieDB);

