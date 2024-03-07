//  *****  Break *****
let arr = [10, 20, 3, 0, 40]
for (let i = 0; i < arr.length; i++) {
    // console.log(`arr : ${arr[i]}`);
    if (arr[i] === 0) {
        // console.log(`Break at ${arr[i]}`);
        break;
    }
} //comes out of the loop i.e here

/* Output
arr: 10
arr: 20
arr: 3
arr: 0
Break at 0
*/

// **********      continue  -- phli glti maaf      ************
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        continue;
    }
    // console.log(`arr : ${arr[i]}`);
}
/*
OUTPUT
arr : 10
arr : 20
arr : 3
arr : 40
*/

// ******  for of ******

const fruits = ['apple', 'orange', 'banana'];

for (let str of fruits) { //arr[i] waala kaam khtm
    // console.log(str);
}
/*
apple
orange
banana
*/

const greetings = "Hello world!"
for (let ch of greetings) { //ch[i] waala kaam khtm
    // console.log(ch);
}
/*
H
e
l
l
o

w
o
r
l
d
!

*/

// map
const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

// *******  objects ******
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { //TypeError: myObject is not iterable
// console.log(key, ":-", value);
// }


// ***********  for in ****************

const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//  ***** fetching keys ****
for (let key in myObject1) {
    // console.log(`key : ${key}`);
}
/*
key : js
key : cpp
key : rb
key : swift
*/

// **** fetching values ****
for (let key in myObject1) {
    // console.log(myObject1[key]);
}

/*
javascript
C++
ruby
swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}
/*
O/P ->
rb
py
java
cpp
*/

for (const key in programming) { //returns index for arrays
    // console.log(key);
}
/*
0
1
2
3
4
*/

//  ******* map **********

const map1 = new Map()
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")

for (const key in map) {
    // console.log(key); //no output
}

// *************** for each **********
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(((item) => {
//     return (
//         console.log(item)
//     )
// }))
//Output
// js
// ruby
// java
// python
// cpp

function printme(arr) {
    // console.log(arr);
}
coding.forEach(item => printme(item))

/*
js
ruby
java
python
cpp
*/

// coding.forEach((item, index, arr) => console.log(`${item} ${index} ${arr}`))
/*
js 0 js,ruby,java,python,cpp
ruby 1 js,ruby,java,python,cpp
java 2 js,ruby,java,python,cpp
python 3 js,ruby,java,python,cpp
cpp 4 js,ruby,java,python,cpp
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageFileName);
})
/*
js
java
py
*/

//  drawback -- forEach do not return anything
const results = myCoding.forEach(item => item)
// console.log('results ', results); //results  undefined
