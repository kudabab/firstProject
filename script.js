"use sctrict";

let numbersOfFilms;

function start() {
    numbersOfFilms = prompt("How many films have you already watched?");
   
    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)){
        numbersOfFilms = prompt("How many films have you already watched?");
    }
}

function rememberMyFilms (){
    for(let i = 0; i < numbersOfFilms; i++){
        const nameMovie = prompt("How the Movie call?");
        const gradeForMovie = prompt("How much do you rate?");
    
        if(nameMovie == null || gradeForMovie == null || nameMovie.length < 1 || 
            nameMovie.length > 50 || gradeForMovie.length < 1 || gradeForMovie > 10 ||
            isNaN(gradeForMovie)){
            alert('Not correctly, to write again!');
            i--;
        }
        else
        movie[nameMovie] = gradeForMovie;
    }
}

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        alert('You watched really few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ){
        alert('You the classic viewer')
    } else if( personalMovieDB.count > 30){
        alert('You the Pokemono!')
    } else 
        alert('ERROR!');
}

function writeMyDb () {
    if(personalMovieDB.privat == false)
        console.log(personalMovieDB);
    else
        alert('Error with access');
}

function writeYourGenres () {
    for(let i = 0; i < 3; i++){
        const answer = prompt("Your favorite genre?");
        if(answer > 0 && answer < 4)
        array[i] = answer;
        else {
            alert('Not HAVE? again');
            i--;
        }
    }
}

start();
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

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();

writeMyDb();

