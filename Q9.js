//Remove Falsy Values from an Array

//Write a function that removes all falsy values from an array


function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
const inputArray = [0, 1, false, 2, '', 3];
const cleanedArray = removeFalsyValues(inputArray);
console.log(cleanedArray); //Output: [1, 2, 3] 