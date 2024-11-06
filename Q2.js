//Flatten an Array
//Write a function that takes a nested array and flattens it to a single-level array.


function flattenArray(arr) {
    return arr.flat(Infinity);
}
const inputArray = [1, [2, 3], [4, [5]]];
const flattenedArray = flattenArray(inputArray);
console.log(flattenedArray); //Output: [1, 2, 3, 4, 5]