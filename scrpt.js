// question 1
var arr=[3,5,2,6,7,9]



function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
  
    const sqrt = Math.sqrt(number);
    for (let i = 3; i <= sqrt; i += 2) {
      if (number % i === 0) return false;
    }
  
    return true;
  }


  var first=arr[0]
if (isPrime(first)){
    console.log("The number is prime")
}  
else{
    console.log("The number is not prime")
}
// question 2
function mostFrequentItem(arr) {
    let maxCount = 0;
    let mostFrequent = null;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            mostFrequent = arr[i];
        }
    }

    return mostFrequent;
}

let array = [2,3,4,5,6,7,8,9,2,7,3,4,2,9,0];
console.log(mostFrequentItem(array)); 
// question 3
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even
for (let i = 0; i <= 15; i++) {
   
    if (i % 2 === 0) {
        console.log(`${i} is even` );
    } else {
        console.log(`${i} is odd`);
    }
}
// question 4gi
// Write a JavaScript program to find the sum of squares of the elements of an array.

function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + num * num, 0);
  }
  let numbers = [10,20,30,40];
  let result = sumOfSquares(numbers);
  
  console.log("The sum of squares is:", result);
  