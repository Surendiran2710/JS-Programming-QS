//Merge Two Objects
//Write a function that merges two objects into one.

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const object1 = { a: 1, b: 2 };
const object2 = { b: 2, c: 4 };
const mergedObject = mergeObjects(object1, object2);

console.log(mergedObject); //Output: { a: 1, b: 2, c: 4 }