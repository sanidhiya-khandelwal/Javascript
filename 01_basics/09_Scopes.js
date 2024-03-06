var a = 10;
let b = 20;
const c = 30;

if (true) {
    var a = 11;
    let b = 21;
    const c = 31;
    // console.log(`inner values:a: ${a} b: ${b} c: ${c}`);  //inner values: a: 11 b: 21 c: 31 

}

// console.log(`outer values: a: ${a} b: ${b} c: ${c} `); //outer values: a: 11 b: 20 c: 30

// *******  child can access Parent fields ********
function one() {
    const username = "htesh"

    function two() {
        const website = "uoutube"
        console.log(username); //htesh
    }
    // console.log(website); //error : ReferenceError: website is not defined

    two();
}
// one()

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addOne(2)) //3
// function addOne(num) {
//     return num + 1
// };

// console.log(addTwo(5));
// const addTwo = (num) => {
//     return num + 2
// }


// console.log(addone(5)) //6 -- we can access values for normal functions

function addone(num) {
    return num + 1
}


//👇🏻this way we can not access
addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}