const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 2000)
})
promiseOne.then(function () {
    console.log('Promise one consumed');
})

// short
new Promise((res, rej) => setTimeout(function () {
    console.log("Async task 2 completed");
    res()
}, 2000)
).then(() => console.log("Promise 2 is completed"))

// passing para in resolve
const promiseThree = new Promise(function (res, rej) {
    setTimeout(() => {
        console.log("Async task 2 completed");
        res({ username: "Sanidh kha", email: "abc@abc.com" })
    }, 1000)
})
promiseThree.then((res) => {
    console.log(res);
})

/*  OUTPUT SO FAR
Async task 2 completed
{ username: 'Sanidh kha', email: 'abc@abc.com' }
Async task is complete
Promise one consumed
Async task 2 completed
Promise 2 is completed
*/



// involving resolve and reject
const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            res({ username: "San Kha", password: "123" })
        } else {
            rej('Error: Something went wrong')
        }
    }, 2000)
})
promiseFour
    .then((res => {
        console.log(res);
        return res.username
    }))
    .then(res => console.log(res))
    .catch((error) => console.log(error))
    .finally(() => console.log("The promise is either resolved or rejected"))


// async await
const promiseFive = new Promise((res, rej) => {
    setTimeout(() => {
        let error = !false;
        if (!error) {
            res({ username: 'Bee Bee', password: 'pass@qwe' })
        } else {
            rej('Error: Be Error')
        }
    }, 2000)
})
/** when we use async await ...use try catch to handle promise rejection case */
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()




//fetch-- sbse phl yhi print hoga...yh special queue m jaata h..baaki sb async calls alg call pr jaate h

//fetch with async await
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// fetch with .then .catch 

fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

// promise.all

