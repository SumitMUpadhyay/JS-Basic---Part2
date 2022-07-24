// Local Scope 
// Can not be access from outside code blocks
// if - NOT VAR

let name = 'sumit';

function calculate(){
 const name = 'money';
 const age = 25;
 // code goes here
 becomesGlobal = 'global variable';
}

// calculate();
console.log(becomesGlobal);
if(true) {
 const name = 'money';
}
console.log(`my name is ${name} and I'm awesome`);