// write a function that adds two numbers together
//

function sumAdd (a=25, b=5) {
    let sum = a + b;
    return sum
}
console.log (sumAdd (25, 5));

//write a function that returns the square of number
//

function squareRoot (x=5 ,  y= 25) {
    let squareRoot = x % y;
    return squareRoot
}
console.log (squareRoot (5, 25));

//create an object called student and add 3 properties with their values


const student = {
    firstName: "William", 
    lastName: "Dandy",
    schoolName: "Broward College",
    age: 18,
} ; 

/* this is for myself. create an array 4 myfavFoods */

const myfavFoods = [
    "Chicken Alfredo",
    "Fried Rice",
    "Korean BBQ",
    "Eggs"
]; 

//place them in functions
//

function hiMyfullNameIs (firstName, lastName, schoolName, age) {
    console.log (firstName + " " + " " + lastName + " " + schoolName + " " + age)
}
hiMyfullNameIs ("William", "Dandy","Broward College", 18)

function iEnjoyeating () { 
    console.log (myfavFoods[0] + " " + myfavFoods[1] + " " + myfavFoods[2] + " " + myfavFoods[3]);
}

iEnjoyeating ("Chicken Alfredo", "Fried Rice", "Korean BBQ", "Eggs")



