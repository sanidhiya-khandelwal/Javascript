/**
 * During this comparison, JavaScript converts the
 * operands to the same type. Since the string "2"
 * can be converted to a number, JavaScript converts it
 *  to a number and then performs the comparison.
*/

/*

console.log("2" > 1); //true
console.log("3" > 4); //false

console.log("3" > true); //true
console.log("0" > true); //false

*/


// null
/**
console.log("null");
//here null is made automatically 0
console.log(null > 1); //FALSE
console.log(null === 1); //FALSE
console.log(null < 1); //TRUE
console.log(null == 0); //FALSE
 */

// undefined
// console.log(undefined > 1); //FALSE
// console.log(undefined === 1); //FALSE
// console.log(undefined < 1); //False

// undefined vs null

// console.log(undefined > null); //FALSE
// console.log(undefined === null); //FALSE
// console.log(undefined < null); //False