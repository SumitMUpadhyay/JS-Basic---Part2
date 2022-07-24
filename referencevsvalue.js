// Reference vs value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays , Function, Objects = Object
// Typeof

// When assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

//When assigning non-primitive data type value to a variable is done by reference so any changes will affect the references.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = {name:'sumit'};
let person2 = person;
person2.name = 'money';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);