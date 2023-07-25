"use strict";

/* переменная: */
let number = 4.6;
console.log('string' * 9);

const persone = 'Alex';

const bool = true;

/* объект: */
const obj = {
    name: 'John',
    age: 25,
    isMarried: false
}

console.log(obj.age);
console.log(obj['name'])

/* массив: */
let arr = ['plum.png', 'apple.png', 6, 'orange.jpg', {}, []];
console.log(arr[0,1]);


/* Общение с пользователем */

const result = confirm('Are you here?');
console.log(result);

const answer = +prompt('Вам есть 18?', '');
console.log( typeof answer * 100); 

const answers = [];
answers[0] = prompt('Name', '');
answers[1] = prompt('Surname', '');
answers[2] = prompt('Age', '');

console.log(answers);

document.write(answers);


/* Интерполяция */

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Привет, ${user}`);


/* Операторы */

let incr = 10,
    decr = 10;

    /* Посфиксные */
incr++;
decr--;    

    /* Префиксные */
++incr;
--decr; 

console.log(incr);
console.log(decr);

console.log(15%2);

console.log(2 + 2 *2 !== '8');

/* &&
|| */

const isChecked = false;
      isClose = false;

console.log(isChecked || !isClose);



/* Условия */

if (4) {
    console.log('ok');
} else {
    console.log('no ok');
}

const num = 50;

if(num == 50) {
    console.log('errors');
} else if (num == 50 ) {
    console.log('mas');
} else {
    console.log('yes');
}

(num == 50) ? console.log('ok') : console.log('error');

const nums = 50;

switch (nums) {
    case 49:
        console.log('Нет');
        break;
    case 100:
        console.log('Нет!!');
        break;
    case 51:
        console.log('Да');
        break;
    default: 
        console.log('Не в этот раз');
        break;
}



/* Циклы */

let nu = 50;

while (nu <= 55) {
    console.log(nu);
    nu++;
}

do {
    console.log(nu);
    nu++;
}
while (nu <=55);

for (let i = 1; i < 10; i++) {
    if(i == 6) {
        /* break; */
        continue;
    }

    console.log(i);
}


/* Вложеные циклы */

for(let i = 0; i < 3; i++) {
    console.log(i);
    for(let j = 0; j < 3; j++) {
        console.log(j);
    }
}

const lines = 5;
let results = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        results += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        results += "*";
    }
    results += "\n";
}

console.log(results)