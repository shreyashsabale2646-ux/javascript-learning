/* 

JS IS DYNAMICALLY TYPE LANGUAGE 

******************************* Primitive *****************************

they all are call by value 
Strings ,                              // strng
Number,                                
Boolearn,
undefined,
Symbol,
null,   // completely empty              // object
BigInt


***************************  Refrence (Non primitive) ********************

// Arrays,
Objects,
Function,               // object function 



+++++++++++++++++++++++++++++++++++++  non premetive ++++++++++++++++++++++++++++++++++++++


Stack (Primitive)   copy 
Heap (Non-Primitive)  // get refrence so change in 2 will change in one 

*/

let userone = {
  email: "ho",
  upi:"vhl"
}

console.log(userone.email)

let usertwo = userone 
usertwo.email="hi"


console.log(userone.email);