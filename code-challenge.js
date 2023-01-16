//Give an array of numbers, write a function to return the sum

function calculateSum (arr) {

    let sum = 0

    for (let i = 0; i < arr.length; i++)
{
    sum = sum + arr[i]
}
return sum 

} 

let myArr = [10, 35, 5, 23]  

console.log (calculateSum(myArr)) 
