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
