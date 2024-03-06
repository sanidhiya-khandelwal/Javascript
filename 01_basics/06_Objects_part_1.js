// Two types of objects

//1 singleton
// Object.create

//2 object literals

const mySym = Symbol("key1") //Symbols are unique & immutable values often used as object property keys. 

const JsUser = {
    name: "Sanidh",
    "full name": "Sanidh khandelwal",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// ***** Accessing Object values *************
// console.log(JsUser.email); //hitesh@google.com
// console.log(JsUser["full name"]); //Sanidh khandelwal

// *******  Symbols  *******************
// console.log(typeof JsUser[mySym]); //string
// console.log(JsUser[mySym]); //myKey1

// ************ Freeze ************
// JsUser.email = "sanidh@gmail.com"
// console.log(JsUser);

// Object.freeze(JsUser)

// JsUser.email = "sanidh@gmail.comflwflsnl"
// console.log(JsUser);

// *********** Adding value in object ***********************
// JsUser.password = 1555;
// console.log(JsUser);

//  ********* creating function inside object *******
// JsUser.greeting = function () {
//     console.log("Helow Js user");
// }
// JsUser.greeting(); //Helow Js user

//*************** Without "this" ************
// JsUser.greetingTwo = function () {
//     console.log(`Helow Js user, ${name}`); //Error : name is not defined
// }
// JsUser.greetingTwo();


//*************** With "this" ************

// JsUser.greetingTwo = function () {
//     console.log(`Helow Js user, ${this.name}`); // "this" here refers to JsUser context
// }
// JsUser.greetingTwo(); //Helow Js user, Sanidh

