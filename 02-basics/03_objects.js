// singelton     means using constructor 
// object.create  singelton



// object literals

const Sym = Symbol("key1")

const JsUser = {
  name: "shreyash",                  // it is actualy "name" :
  "full name" : "shreyash sabale",        // cant access with dot(.)    
  age: 20,
  location: "trichy",
  [Sym]: "mykey1",                           // its treated as symbol now 
  // Sym: "mykey1",               here its treated as string 
  email: "shrey@gmail.com",
  isLoggedIn: true,
  lastLodinDays: ["monday", "Saturday", "Thursday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"]);  // cant acces by dot  only square notation 
console.log(JsUser[Sym]);

JsUser.email = "haha.gmail.com"   // overwrite 





 //   Object.freeze(JsUser)              // we cant change anything 
console.log(JsUser);



JsUser.greeting = function(){
  console.log("hi js user");
}

JsUser.greeting2 = function(){
  console.log(`hi js user , ${this.name}`);  // when we need to call something fro the object 
}

// console.log(JsUser.greeting); // undefined 
console.log(JsUser.greeting()); 
console.log(JsUser.greeting2());

