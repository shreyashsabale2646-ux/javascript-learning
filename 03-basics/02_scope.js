let d =1000   //  GLOBAL SCOPE 

 // {} // scope 
 if(true){
    let a =10;
    const b =20;     // BLOCK SCOPE 
    var c =30; 
 }

 //console.log(a);
 //console.log(b);
 console.log(c);  // it came out of the scope 



 function one(){
    const username = "hitesh"

    function two(){
      const website = "yt"
      console.log(username);
    }

    // console.log(website);  // accessing the website out of scope 

    two()
 }

 one()

 // +++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++


 addOne(5)   // you can define first 
 function addOne(num){
  return num+1
 }



 // addTwo(5)   error  hoisting 

 const addTwo = function(num){      // called as expression to 
  return num +2
 }

 addTwo(5) 