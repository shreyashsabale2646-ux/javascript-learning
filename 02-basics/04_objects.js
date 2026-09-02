//Singelton object 

const tinderUser = new Object()

tinderUser.id = "123abs"
tinderUser.name="shrey"
tinderUser.isLoggedIn= false

console.log(tinderUser)


const regularUser ={
  email:"abc@gmail.com",
  fullname:{
    userfullname: {
      firstname: "shreyash",        //  nesting 
      secondname: "sabale"
    }
  }
}

console.log(regularUser.fullname.userfullname.secondname);

//********************************** COMBINGING OBJECTS *****************************

const obj1 = {1: "a",  2: "b"}
const obj2 = {3: "b" , 4: "c"}

// const obj3 = {obj1 , obj2}   //  its just make two seprate object in one 

//const obj3 = Object.assign( {} , obj1,obj2)  // this will combine two objwcts


const obj3 = {...obj1 , ...obj2}  // best way 
console.log(obj3);

console.log(Object.keys(obj3));  // in array 
console.log(Object.values(obj3))

