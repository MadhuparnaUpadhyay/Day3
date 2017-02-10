const ob= require('./sort.js');
var ob1 = require('./search.js');


let arr=[20,43,45,91,72,77]


console.log("Bubble Sort result:"+ob.bubbleSort(arr));

console.log("Selection sort result:"+ob.selectionSort(arr));

console.log("Insertion sort result:"+ob.insertionSort(arr));

console.log("Binary search found at position"+ob1.binaryIndexOf(43));

console.log("Linear search result  "+ob1.linearIndexOf(91));

