//Find the Maximum Number in an Array
//Write a function that finds the maximum number in an array.

function findMaxNumber(arr) {
    return Math.max(...arr);
}
const numbers = [1, 3, 2, 8, 5];
const maxNumber = findMaxNumber(numbers);

console.log(maxNumber); //Output: 8