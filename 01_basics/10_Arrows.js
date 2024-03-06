const user = {
    usrname: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.usrname}, welcome`); //hitesh, welcome
        console.log(this);
        /* output
        {
            usrname: 'hitesh',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }           
        
        */
    }
}

// user.welcomeMessage()
user.usrname = "Sam"
// user.welcomeMessage(); //o/p👇🏻
// Sam, welcome
/*
{
    usrname: 'Sam',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
*/

// console.log(this); // {} for node,yarn,bun  but in browser u get "window"


function chai() {
    let username = "hitesh"
    console.log(this);
    console.log(this.username); //undefined
}
// chai(); 


const chai2 = function () {
    let username = "hitesh"
    console.log(this); // {}
    console.log(this.username); //undefined
}

// chai2() 

const chai3 = () => {
    let username = "hitesh"
    console.log(this); // {}
    console.log(this.username); //undefined
}


// chai3()



//***********  Arrow function  *******
// const addTwo = (num1, num2) => { return num1 + num2 } //7
// const addTwo = (num1, num2) => (num1 + num2) //7
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(2, 5)); //7

//************ palying with objects *********
// const addTwo = (num1, num2) => ({ username: "hitesh" })
// console.log(addTwo(3, 4)) //{ username: 'hitesh' }


// const addTwo = (num1, num2) => { username: "hitesh" }
// console.log(addTwo(3, 4)) //undefined

