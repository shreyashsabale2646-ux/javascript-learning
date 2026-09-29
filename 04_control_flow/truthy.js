const userEmail = "abccd"

if(userEmail){
  console.log("Got email");
  
}
else{
  console.log("not got")
}


// ++++++++++++++++++++++++++++++++++++++++ FALSY VALUES +++++++++++++++++++++++++++++++++++++++

// false
// 0
// -0 
//  ""
// null, undefined ,NAN

// ++++++++++++++++++++++++++++++++++++++++++ TRUTHY VALUES ++++++++++++++++++++++++++++++++++++++++

// true 
// 1
// []
// "0" , 'false' , " " 
//  {}
// function(){}

// Nullish Coalescing Operator (??) : null undefined 

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10



console.log(val1);