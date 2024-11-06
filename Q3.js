//Check for Duplicate
//Write a function that checks if an array contains duplicates. 

function hasDuplicates(arr) {
    const uniqueElements = new Set(arr);
    return uniqueElements.size !== arr.length;
}
console.log(hasDuplicates([1, 2, 3, 4, 5, 1])); // Output: true
console.log(hasDuplicates([1, 2, 3, 4, 5]));    // Output: false