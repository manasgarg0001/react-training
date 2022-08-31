const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};
circle.draw();

//factory functions

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1)
console.log(circle1)

//Contsructor Functions : pending 

//Dynamic nature of Objects : we can add properties outside curly braces

const Circle = {
    radius: 1
};
Circle.color = 'yellow';
Circle.draw = function () {
}
delete Circle.draw;
delete Circle.color;

console.log(Circle);

//Functions are Objects

function circle2(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const Circle1 = new Function('radius' ,`this.radius = radius;
this.draw = function(){
    console.log('draw');
}`)

const circlee = new Circle1(1) 

const another = new circle2(1)

//reference type vs value types

//reference types : Output will be 11 just you have to comment the value type code
//primitives are copied by their value
//objects are copy by their reference
let obj = {value : 10};

function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);

//value type : output will be 10

let number = 10;

function increase(number){
   number++;
}
increase(number);
console.log(number);

//enumerating properties of an object

const acircle = {
    radius : 1,
    draw() {
        console.log('draw');
    }
};
for(let key in acircle)
console.log(key, acircle[key]);

// for(let key of acircle)
// console.log(key); //this will give an eror because for of loop is used in array and functions.

for(let key of Object.keys(acircle))
console.log(key); //this is correct and return an array

for(let entry of Object.entries(acircle))
console.log(entry);

if('color' in acircle) console.log('yes');

//Clone Of Object

const Circles = {
    radius : 1,
    draw() {
        console.log('draw')
    }
};
const Another = Object.assign({} , Circles);
console.log(Another);