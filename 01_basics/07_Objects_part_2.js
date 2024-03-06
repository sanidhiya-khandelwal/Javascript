const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "Sanidh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

// **** copying objects ****
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "d" }
const obj3 = { 5: "a", 6: "b" }

const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'd', '5': 'a', '6': 'b' }



/**
 *  Using Object.assign() to copy properties from sources to target
 *  const modifiedTarget = Object.assign(target, source1, source2, source3);
 *  It returns the modified target object.
 */
const obj5 = Object.assign({}, obj1, obj2)
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'd' }


obj6 = { obj1, obj2 }
// console.log(obj6); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'd' } }

// Accessing keys, values in objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "I@gmail.com"
    },
    {
        id: 3,
        email: "J@gmail.com"
    }
]

// console.log(users[1].email); //I@gmail.com

// **** returns an array *****
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log((Object.values(tinderUser))); //[ '123abc', 'Sammy', true ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', true ] ]

// console.log(tinderUser.hasOwnProperty("is")); //false
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); //hitesh


//named destructuring
const { courseInstructor: instructor } = course;
// console.log(instructor); //hitesh