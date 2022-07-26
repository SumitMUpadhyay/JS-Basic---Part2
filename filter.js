// Can manipulate the size of new array
// return based on condition

const people = [
 {name:'bob',age:20,position:'developer'},
 {name:'peter',age:25,position:'designer'},
 {name:'susan',age:30,position:'the boss'},
 {name:'anna',age:35,position:'the boss'},
];

const youngPeople = people.filter(function (person){
 return person.age  <=25
});

const developers = people.filter(function(person){
 return person.position  === 'developer';
})

console.log(developers);

