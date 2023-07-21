"use strict";

/* переменная: */
/* let number = 4.6;
console.log('string' * 9);

const persone = 'Alex';

const bool = true; */

/* объект: */
/* const obj = {
    name: 'John',
    age: 25,
    isMarried: false
} */

/* console.log(obj.age); */
/* console.log(obj['name']) */

/* массив: */
/* let arr = ['plum.png', 'apple.png', 6, 'orange.jpg', {}, []];
console.log(arr[0,1]); */


/* Общение с пользователем */

/* const result = confirm('Are you here?');
console.log(result);

const answer = +prompt('Вам есть 18?', '');
console.log( typeof answer * 100); 

const answers = [];
answers[0] = prompt('Name', '');
answers[1] = prompt('Surname', '');
answers[2] = prompt('Age', '');

console.log(answers);

document.write(answers); */


/* Интерполяция */

/* const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Привет, ${user}`); */


/* Операторы */

/* let incr = 10,
    decr = 10; */

    /* Посфиксные */
/* incr++;
decr--; */    

    /* Префиксные */
/* ++incr;
--decr; 

console.log(incr);
console.log(decr);

console.log(15%2);

console.log(2 + 2 *2 !== '8'); */

/* &&
|| */

/* const isChecked = false;
      isClose = false;

console.log(isChecked || !isClose); */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;    
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);