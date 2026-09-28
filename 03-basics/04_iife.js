// Immediately  Invoked Function Expressions (IIFE)

// to avoid from global scope cause polluction in fuction can be polluted to avoid this scenerio we use IIFE;

(
function one(){
  //name iife
  console.log(`DB CONNECTED`);
})();  // semi colun to end iife

((name) => {    // take argument 
  console.log(`DB CONNECTED 2 ${name}`);
})("hitesh")     // give parameter 