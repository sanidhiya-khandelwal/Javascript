const userEmail = []
// if (userEmail) {
//     console.log('usr lgged in');
// }
// else {
//     console.log("not logged in");
// }
// o/p=> user logged in

// falsy=> 0, -0, BigInt 0n, false, null, undefined, NaN, ""
// truthy=> "0", 'false', " ", [], {}, function()){}

//**********  applying check on array ************
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// **** applying check on object **********
const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) { //"Object.keys(emptyObj)." returns an array
//     console.log("Object is empty");
// }

//*** Nullish coalsecing operator (??): null undefined

/*

The nullish coalescing operator (??) is a logical operator in
JavaScript that provides a way to handle default values for cases
where a variable is null or undefined. It returns the right-hand 
operand when the left-hand operand is null or undefined; 
otherwise, it returns the left-hand operand.

*/



let val1;
// val1 = 5 ?? 10
// console.log(val1); //5

// val1 = null ?? 10
// console.log(val1); //10

// val1 = undefined ?? 10 ?? 20
// console.log(val1); //10

// val1 = undefined ?? null ?? 20
// console.log(val1); //20


// ******** Ternary operator       **************
// const tea = 10;
// 10 < 20 ? console.log("tea") : console.log("coffee"); //tea