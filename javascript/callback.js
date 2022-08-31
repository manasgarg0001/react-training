function myDisplay(some) {
    console.log(some);
}
function myCalc(num1, num2) {
    let sum = num1 + num2;
    myDisplay(sum);
}
let result = myCalc(5, 5);
myDisplay(result);



//JS Callback : A callback is a function passed as an argument to another function

function displayName(name) {
    console.log(name);
}
function returnName(isValid, name, myCallback) {
    let validName = isValid ? name : 'not valid';
    myCallback(validName);
}
returnName(true, 'Manas', displayName);

//another eg.of callback

function myDisplay(some) {
    console.log(some);
}
function returnname(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
returnname(10, 5, myDisplay);

//asynchronus functions: Functions running in parallel with other functions 
//are called asynchronous.
setTimeout(function () { myFunction('this is asynchronus') }, 2000);
function myFunction(value) {
    console.log(value);
}

//PROMISES :"Producing code" is code that can take some time

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('success')
    }
    else {
        reject('failed')
    }
})

p.then((message) => {
    console.log('this is in the then ' + message)
})
    .catch((message) => {
        console.log('this is in the catch ' + message)
    })

//another example of promises
// function func1(){
//     return new Promise(function(resolve ,reject){
//         setTimeout(()=>{
//             const error=true;
//             if(!error){
//                 console.log("your promise has been resolved");
//                 resolve();
//             }
//             else{
//                 console.log('your promise has not been resolved');
//                 reject('sorry not fulfilled')
//             }
//         },2000)
//     })
// }
// func1.then(function(){
//     console.log('thanks for resolving')
// }).catch(function(error){
//     console.log('reason: ' +error)
// })


//Another Promise
let myPromsise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('this is a promise');
    }, 3000)
});
myPromsise.then(function (value) {
    console.log(value);
})

//promise
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('video one recorded')
})
const recordVideoTwo = ((resolve, reject) => {
    resolve('video two recorded')
})
const recordVideoThree = ((resolve, reject) => {
    resolve('video three recorded')
})
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

//Async/Await
let loading = true;
async function getPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/')
        .then((response) => response.json())
        .then((json) => {
            console.log(json, 'json');
            return json;
        })
        .catch((error) => console.log(error, 'error'))
        .finally(() => {
            let loading = false
        })
    return response;
}
const photos = getPhotos()


//another example 
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/1',
        {
                method: 'get',

            }
        );
        const data = await response.json()
        console.log(data, 'responses');
    }
    catch (error) {
        console.log(error, 'error')
    }
}
getData()

//Delete data
async function deleteData() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`,
        {
                method: 'delete',

            }
        );
        const data = await response.json()
        console.log(data, 'responses');
    }
    catch (error) {
        console.log(error, 'error')
    }
}
deleteData()

//another
async function deleteData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos/1');
    console.log(response ,'response')
}
deleteData(1);

//another
async function getData(){
    const response = await axios.post('https://jsonplaceholder.typicode.com/photos/1',
    {
        id : 1,
        content : 'this is my first post'
    }
    );
    console.log(response.data.thumbnailurl,'responses')
}
getData()

//patch
async function getData(){
    const response = await axios.patch('https://jsonplaceholder.typicode.com/photos/1',
    {
        content : 'updated',
    }
    );
    console.log(response.data.thumbnailurl,'responses')
}
getData(100);
getData(101);
getData(90);


//FETCH

fetch('https://reqres.in/api/users/1', {
    method: 'post',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        name: 'user1'
    })
})
    .then(res => {
        return res.json
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('error'))


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => console.log(error, 'error'))
    .finally(() => {
        let loading = false;
    });

//Creating a Resource

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'post',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//Updating a resource

fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'put',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//AXIOS Post method

axios
    .post('https://jsonplaceholder.typicode.com/posts/13')
    .then((res) => {
        console.log(res, 'res')
    })
    .catch((err) => {
        console.log(err, 'err')
    })
    .finally(() => { })


//get method

axios
    .get('https://jsonplaceholder.typicode.com/posts/240')
    .then((res) => {
        console.log(res, 'res')
    })
    .catch((err) => {
        console.log(err, 'err')
    })
    .finally(() => { })

//Delete method

axios
    .delete('https://jsonplaceholder.typicode.com/posts/10')
    .then((res) => {
        console.log(res, 'res')
    })
    .catch((err) => {
        console.log(err, 'err')
    })
    .finally(() => { })

//post request

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

//Performing multiple concurrent requests

function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
        const acct = results[0];
        const perm = results[1];
    });