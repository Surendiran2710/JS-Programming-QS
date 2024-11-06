//Calculate the Sum of Array Elements
//Write a function that calculates the sum of all numbers in an array.


function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum); //Output: 15 