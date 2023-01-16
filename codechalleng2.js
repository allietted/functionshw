//given any array of numbers. write a function that returns the largest number in array (without usinf math.max)
//

function getLargestnumber (nums) {
    let thelargest = 0

    for (let i = 0; i < nums.length; i++) {

        if (nums [i] > theLargest) {
            thelargest = nums [i]
        }
    }

    console.log(thelargest)
}
