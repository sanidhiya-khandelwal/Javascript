/**
 * Primary : Number, Bigint, String, Boolean, null, undefined, Symbol
 *
 * Reference : Array, Object Function (),{},[]
 */

// Primary

// -number
// let num1 = 10;
// console.log(typeof num1, ' ', num1);

// bigint
// let num2 = 1222n * 2n
// console.log(typeof num2, ' ', num2);

// strings
// let str1 = "Hi this is"
// let str2 = " testing's"
// console.log(str1 + str2);

/*

        console.log(12 + 2 + 'hi');  //14hi
        console.log('hello ' + 12 + 2 + 'hi'); //hello 122hi
        console.log('hi' + 12 + 2); //hi122
        console.log('hi' + (12 + 2) + 'hi'); //hi14hi

*/

// Boolean

/*
    let isLoggedIn = true
    console.log(typeof isLoggedIn, isLoggedIn);

    console.log(isLoggedIn + 1); //2

    let output = isLoggedIn + ' baby'
    console.log(typeof output, output); //string true baby
 */


// null -> datatype is object
/*

    let temp = null;
    console.log(typeof temp, typeof (temp + "sng")); //object string
    console.log(typeof temp, temp - 2); //object -2
    console.log(typeof temp, temp + true); //object 1
    console.log(typeof temp, temp + "sng"); //object nullsng

*/

// undefined => datatype is undefined
/*
let temp = undefined;

console.log(typeof temp);

console.log(temp + 2); //NaN
console.log(temp + true); //NaN
console.log(typeof (temp + true)); //number

console.log(temp + 'two'); //undefinedtwo
*/

// symbol
/**
 * Symbol() creates a new, unique symbol each time it's called.
 * Symbols can also be created with a description (a string),
 * but two symbols with the same description are still distinct.
 * Symbols are often used as keys in objects to avoid accidental property name collisions,
 * as they are guaranteed to be unique.
*/


// let symbol1 = Symbol("121")
// let symbol2 = Symbol("121")
// console.log(symbol1 === symbol2);
// console.log(symbol1);
// console.log(symbol2);



// Primitive means ? creating a real copy

// let x = 10;
// let y = x;
// console.log(`x is : ${x} \n y is : ${y}`);
// y = x + 2;
// console.log(`x is : ${x} \n y is : ${y}`);


// refrence means - reference is passed of that value, copy is not real

// let arr1 = [1, 2, 3, 4, 5]
// console.log(arr1);
// let arr2 = arr1;
// console.log(arr2);
// arr2.push(6)
// console.log(arr1);
// console.log(arr2);

// array
/*
    let arr = [10, 20, 3, 0]
    console.log(arr, typeof arr); //[ 10, 20, 3, 0 ] object
*/

// object
/*
let obj = {
    name: 'sanidh',
    email: "xyz@gmail.com"
}

console.log(typeof obj, obj); //object { name: 'sanidh', email: 'xyz@gmail.com' }

let obj1 = obj;
console.log(obj1);
obj1 = obj1.email = "abc@gmail.com"
console.log('obj ', obj); //{ name: 'sanidh', email: 'xyz@gmail.com' }

*/


// date
/*
const date = new Date('2022-03-25')
console.log(typeof date, date); //object 2022-03-25T00:00:00.000Z
*/

//function 
/*
const x = function test() {
    console.log('testing function');
}

console.log(typeof x); //function

*/