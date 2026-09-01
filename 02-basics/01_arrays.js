//array are shallow copy means refrence is passed 

const arr=[1,2,4,5,6,7];

const arr2 = ['hi' , 'mu', 'suiiii'];

const arr3 = new Array(1,5,7.8);

console.log(arr2[1]);




//Array Methods 

arr.push(6)
arr.push(7)  // add value 
arr.pop()  // remove last element 

arr.unshift(9)  // add value at start of array 
arr.shift() // like pop but from start 

console.log(arr.includes(9));   // no present or not
console.log(arr.indexOf(3))  // index of element


const newArr = arr.join()  // stringify the array , seprated
console.log(newArr);
console.log(arr);



// Slics , S[plice 

console.log(arr.slice(1 ,3))  // it willgive you value 2,4

console.log(arr.splice(1 ,3))  // it will give 2, 4 ,5  but in orignal array also it will remove
console.log(arr);  // after splice array become  1,6,7,6   og was 1,2,4,5,6,7,6


