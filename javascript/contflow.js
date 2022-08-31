// there is if else statement on basis of hours
//if time is 6am to 12pm: good morning
// if it is 12pm to 6pm :good afternoon
//otherwise: good evening

let hour = prompt('enter the hours');
console.log(hour)
if (hour >= 6 && hour < 12)
    console.log('good morning')

else if (hour >= 12 && hour < 18)
    console.log('good afternoon')

else
    console.log('good evng')

//SWITCH-CASE
let age=18;
switch (age) {
    case 18:
        console.log('you are 18');
        break;

    case 28:
        console.log('you are 28');
        break;


    case 38:
        console.log('you are 38');
        break;

    default:
        console.log('you are young');
}

//FOR LOOP
for (let i = 0; i < 5; i++ ){
    console.log('hello world',i)
}

//printing odd numbers
for (let i = 0; i <= 5; i++ ){
    if(i % 2  !==0) console.log(i);
}

//while loop
let i = 0;
while(i <= 5){
    if(i % 2  !==0) console.log(i);
    i++;
}
//DO WHILE LOOP
let j = 0;
do{
    if(j % 2  !==0) console.log(j);
    i++;
} while (i <= 5);

//FOR-IN loop

const person = {
    firstName : 'Manas',
    lastName : 'garg',
    height : 6
};
for(let key in person)
console.log(key,person[key]);

const colors = ['red','green','blue']
for(let index in colors)

console.log(index ,colors[index])

//FOR-OF    

for(let color of colors)
console.log(color)

//BREAK AND CONTINUE STATEMENT

let m=0;
while(m<=10){
if (m===5) break;

console.log(m);
m++;
}

let n=0;
while(n<=10){
    if(n % 2 === 0){
        n++;
        continue;
    }
    console.log(n);
    n++;
}