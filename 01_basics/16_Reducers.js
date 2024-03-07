// first time when loop starts inital value is assigned to accumulator (acc)

const myNums = [1, 2, 3]
const initialValue = 0;
const myTotal = myNums.reduce((acc, cur) => {
    return acc + cur
}, initialValue)

// console.log(myTotal) //6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); //22996

