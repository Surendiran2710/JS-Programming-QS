//Calculate Average of an Array
//Write a function that calculates the average of all numbers in an array. 


function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(average); // Output: 3