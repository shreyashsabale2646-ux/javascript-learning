let score = "33abc"  // null ==0    undefined == NaN    123ab = NaN   true = 1 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN  if its not pure number 

/*
"33" => 33
"33abs" => NaN
true => 1
null => 0;
undefined => NaN
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true;
// 0=> false
// "" => false
// "hi" => true 


let num =33

let strNUm = String(num)
console.log(typeof strNUm);


// *****************  Operations *****************

let value =3;
let negvalue = -value

console.log(negvalue);


let str1 = "hello"
let str2 = " shree"

let str3= str1 + str2 ;
console.log(str3);


console.log("1" + 2); //12
console.log(1 + "2"); //12 
console.log("1" + 2 +2 ); // 122
console.log(1 + 2 +"2"); // 32

let num1 , num2 , num3 

num1 = num2 =  num3 = 2 + 2;

let gameCounter = 100
gameCounter++;
++gameCounter;



