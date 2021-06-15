const firstName = 'Christian';
const lastName = 'Johnson';
const age = 38;
const str = 'Hello World';
const tags = 'Web Development, Web Design, Programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Bobby';
val += 'Ferrer';

val = 'Hello my name is ' + firstName ;

// Escaping
val = "That's awesome, I can't wait";

val = firstName.length;

val = firstName.concat(' ', lastName);

val = firstName.toLowerCase(firstName);
val = lastName.toUpperCase();

val = firstName[3];

val = firstName.indexOf('i');
val = firstName.lastIndexOf('i');

val = firstName.charAt('1');


val = firstName.charAt(firstName.length -1);


val = firstName.substring(1,4);

val = firstName.slice(1,4);
// val = firstName.slice(1,3);

// val = str.split(' ');
// val = str.split('');

// val = str.replace('World', 'Jules');

// val = str.includes('');



console.log(val);