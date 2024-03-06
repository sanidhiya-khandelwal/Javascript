// basics

// let str = "Hello Sanidhya"
// console.log(str[0]); //H
// console.log(str[50]); //undefined

// const str1 = new String("Testing")
// console.log(str1);  // [String: 'Testing']

// // Template Strings
// let str2 = `ths is how we
// learn programming`;
// console.log(str2);

let str = "ChatGpt is the future of coding "
let str1 = "and AI"
// methods
// console.log(str.charAt(5)); //p
// console.log(str.indexOf('t')); //3
// console.log(str.includes('is')); //true
// console.log(str1.concat(str)); //and AIChatGpt is the future of coding

/*
    SUBSTRING : If you omit the second parameter, substring() will slice out the rest of the string.
    Negative value is ommitted
*/
// console.log(str.substring(0, 4)); //Chat
// console.log(str.substring(1)); //hatGpt is the future of coding
// console.log(str.substring(-2)); //ChatGpt is the future of coding
// console.log(str.substring(-8, 4)); //Chat

/*
    SUBSTR() is similar to slice().
    The difference is that the second parameter specifies the length of the extracted part.
    If you omit the second parameter, substr() will slice out the rest of the string.
    If the first parameter is negative, the position counts from the end of the string.
*/

// ChatGpt is the future of coding
console.log(str.substr(3, 4)); //tGpt
