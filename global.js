// Global Scope vs Local Scope
// any Variable outside code block {} is said to be in Global Scope
// Can be access anywhere in the program 
// Gotchas : name collisions, modify by mistake 

let name = 'sumit';
name = 'money';

function calculate(){
 // Some other code...
 console.log(name);
 name = 'orange';
 function inner(){
  name = 'inner name value';
  console.log(`this is from inner function ${name}`);
 }
 inner();
}

calculate();

if (true) {
 // some other code.....
 console.log(name);
 name = 'pants';
}

console.log(`my name is ${name} and I'm awesome`)
