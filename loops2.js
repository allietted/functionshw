// /* ******Do While****** 
// */

// console.log ("Do While Loop \n****");

// let i = 0; 
// do {
    
//     console.log("This is #", i)
//     i++;
// } while(i < 10);


/* ***while loop**** */

console.log("while Loop \n******");
let i = 0
while (i < 10) {
    console.log ("This is #", i)
    i++
} 

/* ****For Loop with Break**** */

console.log("For Loop with break\n*****");

let i = 0; i < 10; i++) {
    if (i===5) {break;}
    console.log ('#, i');

} 

/* For In Loop*///

const person = 
{
    firstname: "Alliette", 
    lastname: "Dortelus",
    age:47
}

console.log(person);

for (let i in person){
    console.log("key =>",i);
    console.log ("value =>", person [i])

}

