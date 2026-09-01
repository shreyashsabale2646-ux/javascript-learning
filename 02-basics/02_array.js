const name =["shrey", "lalit ", "hi"]
const rommate = ["aaditya", "hamdan", "shreyash"]

//name.push(rommate) // we get array in array 

//console.log(name); // [ 'shrey', 'lalit ', 'hi', [ 'aaditya', 'hamdan', 'shreyash' ] ]
//console.log(name[3][2]);  // for shreyash 

 //const all = name.concat(rommate) // make an new array and add all thisd it into it 
 //console.log(all);

const all = [...name , ...rommate]  // spread operator 
console.log(all);

const arr3 = [1,2,3,[1,2],[1,2,[1,2,5]]]  // complex array 
const usable = arr3.flat(Infinity); // mix all element 
console.log(usable);



Array.isArray("hi") // true or false 

console.log(Array.from("Hshdtuty")); // make an array of all char 


console.log(Array.from({name : "shrey"})); // intreseting wil give null 

let s=100;
let s2=200;
let s3 = 49;

console.log(Array.of(s,s2,s3)); // combine all varables 

