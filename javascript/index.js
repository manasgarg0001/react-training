console.log('hello javascript');
let name = 'Manas'
alert(name)
//string functions
let text= 'abcdefghijklmnopqrstuvwxyz'
let length= text.length;
console.log(length);
//slice method
let str= "apple, banana, kiwi";
let part= str.slice(7, 14)
console.log(part)

//substring method
console.log(str.substring(7, 13))

//replace
console.log(str.replace('apple' ,'peach'))

//touppercase
console.log(str.toUpperCase())

//tolowercase
console.log(str.toLowerCase())

//concat
console.log(str.concat([1,2,3,4,5]))

//trim
console.log(str.trim())

//padstart
console.log(str.padStart(4,'x'))

//charat
console.log(str.charAt(0))

//charcodeat
console.log(str.charCodeAt(0))

//split
console.log(str.split("!"))

//now there are some array methods
const fruits=["apple","banana","kiwi","orange"]

//join method
console.log(fruits.join("*"))

//pop method
console.log(fruits.pop())
console.log(fruits)

//push method
console.log(fruits.push("lichi"))
console.log(fruits)

//shift method
console.log(fruits.shift())
console.log(fruits)

//unshift method
console.log(fruits.unshift('lemon'))
console.log(fruits)

//fruit.length method
//console.log(fruits[fruits.length = 'apple'])
//console.log(fruits)

//delete 
console.log(delete fruits[0])
console.log(fruits)

//concat method
const myGirls = ["mahi", "sahi"];
const myBoys = ["kamil", "manas", "sanam"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

//splice: The splice() method adds new items to an array.
console.log(fruits.splice(2,0,'mango','cherry'))
console.log(fruits)

//slice: The slice() method slices out a piece of an array.
const citrus = (fruits.slice(2))
console.log(citrus)

const citrus1 = (fruits.slice(1,4))
console.log(citrus1)

//toString Method
console.log(fruits.toString())
console.log(fruits)
typeof(fruits)
