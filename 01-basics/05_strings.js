const name = "hitesh"

const repoCount =50

console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameNAME = new String('hh-lv-gbu-ci');

console.log(gameNAME[0]);  // to know the container 
console.log(gameNAME.length); // length 
console.log(gameNAME.toUpperCase()); // to make all the leetters uppercase 
console.log(gameNAME.charAt(2)); // position at 2nd 
console.log(gameNAME.indexOf('h')); // where is h 

const newstring = gameNAME.substring(0,4); // to make substring 
console.log(newstring);

const anotherstring = gameNAME.slice(-10,4);  // we can use nefgative value in slice only 
console.log(anotherstring);


const newString1 = "     htesh       ";
console.log(newString1);
console.log(newString1.trim());  // remove spaces 


const url = "https://hitesh.com/hiteshc%20houdhary";

console.log(url.replace('%20' , '-'));  // to replace the word 


console.log(url.includes('hitesh')); // wethert string consist of this word 


console.log(gameNAME.split('-')); // split the string in array with help of dash 

