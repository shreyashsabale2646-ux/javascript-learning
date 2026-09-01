const score = 400
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // convert no to string 
console.log(balance.toFixed(2));   //givee fix value after desi mall

const x = 23.6589;

console.log(x.toPrecision(3));  // priorty before decimal 

const y = 1000000;
console.log(y.toLocaleString('en-IN')); // easy to understand


// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++=+=+

console.log(Math);
console.log(Math.abs(-4)); // negative to pos 

console.log(Math.round(4.6)); // round fig 

console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.6)); // 5

console.log(Math.min(4, 8 ,6 ,78 ));
console.log(Math.max(4, 8 ,6 ,78 ));

console.log(Math.random());