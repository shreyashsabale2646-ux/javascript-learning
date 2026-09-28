const user ={
  username: "hitesh",
  price: 99,

  welcomeMsg: function(){
    console.log(`${this.username} , welcome bro`)
    ;
    // console.log(this);   // show the current context 
  }

}

user.welcomeMsg()
user.username = "Sam"   // change the context so we use this word above 
user.welcomeMsg()

console.log(this) // {} it will be empty as their nothing in global 
                 
 // in browser the global object is window object 
    




const chai =() =>
{
  let username ="hii"
  console.log('hi');
  console.log(this);  // {} so we cant use this in arroe=w function where as in normal function it will show values 
}

// chai()

const addTwo = (num1 , num2) =>{
  return num1 + num2
}

console.log(addTwo(2,3));


// +++++++++++++++++++++++++++  IMPLICIT RETURN ++++++++++++++++++++++++++

const assThree = (num1,num2,num3) => num1+num2+num3;  // did not write curly bracess 