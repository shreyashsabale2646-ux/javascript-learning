

function sayMyName(){
  console.log("h");
  console.log("f");
  console.log("y");  
  console.log("g");
  console.log("d");
}

sayMyName() // execution 
 // sayMyname // refrence 

/*
function AddTwoNum(number1 , number2){
   console.log(number1 + number2)
}
 */

function AddTwoNum(number1 , number2){
   let result = number1+ number2
   return result                                   // last line of function 
}


const result = AddTwoNum(3, 5)

console.log("Result: ", result);


function loginUseMsg(username ="Sam"){
  if(username === undefined){
    console.log("please enter username");
    return 
  }
  return `${username} just logged in`
}

// console.log(loginUseMsg("hiiiiiiiii"))
// console.log(loginUseMsg())   // undefined


// **********************************  MULTIPLE PARAMETER **********************************


function calculateCartPrice(...num1){  //rest operator it will give array 
  return num1
}

console.log(calculateCartPrice(2 ,4, 5)); // what if we give multiple value


// ********************************** PASSING OBJECT TO FUNCTION  **********************************

const  user = {
  username: "shrey",
  price: 199,
}

function handelObject(anyobject){
  console.log(`USername is ${anyobject.username} and price is ${anyobject.price}`)
}

handelObject(user);