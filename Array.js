// Array
const numbers = [43, 56, 76, 55, 60];
const number2 = new Array(22, 45, 67, 79, 30); // array can be declared like this also
const fruits = ["Apple", "Bananna", "Orange"];
const mixed = [22, "hello", undefined, null]; // we can add any data types into array

let val1;

val1 = numbers.length; // get array lenght

// check if an array
val1 = Array.isArray(numbers);

// get single value in an array
val1 = numbers[3];

// insert or replacce
numbers[2] = 100;

// find the index values
val1 = numbers.indexOf(100);

// add number to an array
numbers.push(250);

// add to the front of the array
numbers.unshift(120);

// remove the last number from an array
numbers.pop();

// remove the first number from an array
numbers.shift();

// Splicing
numbers.splice(1, 2);

// reverse the array
numbers.reverse();

// Concate the array
val1 = numbers.concat(number2);

// sort
val1 = fruits.sort();
val1 = numbers.sort();

// Assecending order sort
val1 = numbers.sort(function (x, y) {
  return x - y;
});

// Decending order
val1 = numbers.sort(function (x, y) {
  return y - x;
});

console.log(numbers);
console.log(val1);
