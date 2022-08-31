//SWAPPPING VARIABLES
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


//print the greater number
let number = max(3, 2);
console.log(number)

function max(a, b) {
    if (a > b) return a;
    return b;
}
//other method on place of if is:
// return(a > b) ? a : b;

//exercise 2

console.log(isLandscape(600, 800))

function isLandscape(width, height) {
    return (width > height)
}

//FIZZBUZZ
const output = fizzBuzz(15);
console.log(output)

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'not a number';

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'fizzbuzz';

    if (input % 3 === 0)
        return 'fizz';

    if (input % 5 === 0)
        return 'buzz';

    return input;
}

//CAR SPEED PROGRAM

checkspeed(700);      //this is a function call
function checkspeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('ok');

    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('license suspended');

        else
            console.log('points', points)
    }
}

//PRINT THE ONLY STRING PROPERTIES

const movie = {
    title: 'a',
    releaseYear: 2022,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

//sum of multiples 3 & 5

console.log(sum(10));

function sum(limit) {
    let sum = 0;
    for (i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}

//printing stars using loop

showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern)
    }
}

//PRIME NUMBERS :: here loop i is for numbers and loop j is for factors

showPrimes(20);

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = 'true';
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i);

    }
}

//even and odd numbers
