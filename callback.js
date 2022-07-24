function morning(name) {
 return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name){
 return `Good afternoon ${name.repeat(3)}`;
}

function greet(name,cb){
 const myName = 'sumit';
 console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bob', morning);
greet('john', afternoon);

// function greetMorning(name){
//  const myName ='sumit';
//  console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name){
//  const myName ='sumit';
//  console.log(`Good morning ${name}, my name is ${myName}`);
// }

// greetMorning('john');
// greetAfternoon('peter');