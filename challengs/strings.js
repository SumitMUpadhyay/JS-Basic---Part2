/*

## Stings #8
1.create function fullName
2.accept two parameters "firstName"
, "LastName"
3. add them together (concat) and return result in uppercase 
4. Invoke full Name and Pass some value
5. Log Result
6. Change the order of arguments
7. Refactor to object parameter
*/

// function fullName(firstName, LastName){
//  const fullName = `${firstName} ${LastName}`;
//  return fullName.toUpperCase();
// }
// console.log(fullName('sumit','upadhyay'));

function fullName({firstName, LastName}){
 const fullName = `${firstName} ${LastName}`;
 return fullName.toUpperCase();
}


console.log(fullName({LastName:'smith',firstName:'money'}));