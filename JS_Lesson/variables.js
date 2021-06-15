// // var, let, const

// var name = "John Doe";
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Cannot start with number

// // Multi word vars
// var firstName = 'John'; // Camel Case
// var first_Name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case

// // let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // const
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// console.log(name);

// objects
// properties of objects are always changeable
const person = {
  name: 'John',
  age: 30,
};

person.name = 'Sara';
person.age = 32;

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

console.log(person);