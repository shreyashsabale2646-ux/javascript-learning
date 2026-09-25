//  de-structure 

const course ={
   coursename: "js in hindi",
   price: "999",
   courseInstructor: "hitesh"
}

// course.courseInstructor 

//const {courseInstructor} = course // we just  extract it 
//console.log(courseInstructor)

const{courseInstructor: instructor} = course  // we destructure it 
console.log(instructor)


//////////////////////////////////////////////   API /////////////////////////////////////////
/*
{
  "name": "hitesh",
  "coursename": "js in hindi",
  "price": "free"
}
  */