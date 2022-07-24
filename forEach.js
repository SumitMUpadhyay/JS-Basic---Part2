//forEach
// does not return a new array

const people = [
 {name:'bob',age:20,position:'developer'},
 {name:'susan',age:25,position:'designer'},
 {name:'susy',age:30,position:'the boss'}
];

function showPerson(person){
 console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function(item){
  console.log(item.position.toUpperCase());
})