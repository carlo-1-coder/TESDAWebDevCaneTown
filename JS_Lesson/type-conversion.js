let val;

// Number to string
val = String(555);
val = String(4 + 4);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

val = (5).toString();
val = true.toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);

val = Number([1,2,3,4]);

val = parseInt('100.40');
val = parseFloat('100.40');

// Output

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);


console.log(typeof val);