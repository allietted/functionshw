function getLargestNumber(list) {
    let largestNum = 0
    for(let i = 0; i < list.length; i++) {
      if(list[i] > largestNum) {
        largestNum = list[i]
      }
    }
    return largestNum
  }
  
  const myNums = [17, 24, 69, 86, 42, 13, 11]
  
  const largest = getLargestNumber(myNums) // should return 86
  
  console.log(largest)