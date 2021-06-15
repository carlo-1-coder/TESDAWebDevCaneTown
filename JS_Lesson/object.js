const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 23,
  email: 'smith@gmail.com',
  hobbies: ['coding', 'music'],
  address: {
    city: 'Manila',
    street: 'Pearl'
  },
  getBirthYear: function() {
    return 2021 - this.age;
  }
}

let val;
Math.ceil()
val = person;
// Get specific value

val = person.firstName;
val = person.age;
val = person.getBirthYear();
val = person.address['city'];
val = person.hobbies[0];

const people = [{name: 'John', age: 38}, {name: 'Mike', age:20}, {name: 'Alvin', age: 28}]

for(let i = 0; i < people.length; i++) {
  console.log(people[i].name);

}

// console.log(val);