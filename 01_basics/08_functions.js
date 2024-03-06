function addTwoNumber(num1, num2) {
    console.log(num1 + num2);
}
// addTwoNumber(10, 2) //12

function addThreeNumber(num1, num2, num3) {
    // return num1 + num2 + num3
}

// console.log(addThreeNumber(10, 2, 3)); //15

const result = addThreeNumber(1, 2, 3)
// console.log(result); //6


//********  default parameters  *****************
function isUserLoggedIn(username = 'john doe') {
    if (!username) {
        console.log("pleas eneter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(isUserLoggedIn('san')); //san just logged in
// console.log(isUserLoggedIn()); //john doe just logged in


// ............... rest parameters *****************
function calculatePrice(num1, num2, ...restNums) {
    return restNums
}
// console.log(calculatePrice(10, 20, 30, 40, 50, 60)); //[ 30, 40, 50, 60 ]

//*********  PAssig reference to a function  **********
const user = {
    username: "hitesh",
    prices: 188
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} price is ${anyObject.prices}`);
}

// handleObject(user)

// handleObject({
//     username: 'xyz abc',
//     prices: 200
// })  //Username is xyz abc price is 200


//  ********** Accessing Arrays *********
const myNewArray = [200, 400, 600, 500]

function returnArray(getArray) {
    return getArray[2]
}
// console.log(returnArray(myNewArray)); //600

const myNewArray2 = [10, 20, 30, 40]
// console.log(returnArray(myNewArray2)); //30