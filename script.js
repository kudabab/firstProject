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

    if(nameMovie.length < 1 || nameMovie.length > 50 || gradeForMovie.length < 1 || gradeForMovie > 10){
        alert('Not correctly, to write again!');
        i--;
    }
    else
    movie[nameMovie] = gradeForMovie;
}

if(personalMovieDB.count < 10){
    alert('You watched really few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){
    alert('You the classic viewer')
} else if( personalMovieDB.count > 30){
    alert('You the Pokemono!')
} else 
    alert('ERROR!');


console.log(personalMovieDB);

