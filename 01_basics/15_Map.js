const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNums = myNumers.map(num => num + 10)
// console.log(myNums); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

// ***** chaining *******
const myNewNumers = myNumers.map(num => num + 2) //iske result pr agla map chalega [3, 4,  5,  6,  7,8, 9, 10, 11, 12]
    .map(num => num / 2) //[1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]
    .filter(num => num > 5); //[5.5, 6]

// console.log(myNewNumers);//[5.5, 6]

