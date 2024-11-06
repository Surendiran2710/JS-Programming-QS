//Reverse an Array
//Write a function that takes an array and returns a new array with the elements in reverse order.

function reverseArray(arr) {
return arr.slice().reverse();
    }
    const inputArray = [1, 2, 3, 4, 5];
    const reversedArray = reverseArray(inputArray);
    console.log(reversedArray); // Output: [5, 4, 3, 2, 1] 