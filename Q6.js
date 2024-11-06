//Group Array of Objects by Property
//Write a function that groups an array of objects by a specific property. 

function groupBy(arr, property) {
  return arr.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
          acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
  }, {});
}
const items = [
  { id: 1, category: 'fruit' },
  { id: 2, category: 'vegetable' },
  { id: 3, category: 'fruit' }
];
const groupedItems = groupBy(items, 'category');
console.log(groupedItems); 
  
  // Output:
  // {
  //   fruit: [
  //     { id: 1, category: 'fruit' },
  //     { id: 3, category: 'fruit' }
  //   ],
  //   vegetable: [
  //     { id: 2, category: 'vegetable' }
  //   ]
  // }
  