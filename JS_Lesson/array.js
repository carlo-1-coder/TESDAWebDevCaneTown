// Create some arrays

const numbers = [43,56,36,23,44,33,5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['Apple', 'Banana', 'Orange', 'Pearl' ];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

//  Get array Length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get Single Value
val = numbers[3];
val = numbers[0];
numbers[2] = 100;
// // Find index of value
val = numbers.indexOf(23);


// Mutating Arrays
// Add on top
numbers.push(250);
// Add on to front
numbers.unshift(120);

// Take off from end
numbers.pop();
// Takee off from front
numbers.shift();
// Splice values
// numbers.splice(0, 3);
// // Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

//Sorting
val = fruits.sort();
val = numbers.sort();
// Use the compare function
val = numbers.sort(function(x, y) {
  return x-y;
});

val = numbers.sort(function(x, y) {
  return y-x;
});
// Find 
function over50(num) {
  return num > 50;

}

val = numbers.find(over50);

console.log(val);
