// Function decleration and expression
// one function can be declred 5 times in our web page

// ---Function Decrleration----

function greet() {
  console.log("Hi");
}
greet(); // call back the function

// Retrun some values
function number3() {
  return 1995;
}
console.log(number3());

// function with two paramaters
function personalName(firstName) {
  return `Hello ${firstName}`;
}
console.log(personalName("Bharath"));

function personalName1(firstName = "BharathS") {
  return `Hello ${firstName}`;
}
console.log(personalName1());

function personalName2(firstName = "BharathS") {
  return `Hello ${firstName}`;
}
console.log(personalName1("Bharath10"));

// Function Expression

const mul = function () {
  return "Tiger";
};

console.log(mul());

const mul1 = function (a, b) {
  return a * b;
};

console.log(mul1(2, 2));

// Immeditly invokable function expression (IIFE) -- Used in modular design patterns
(function (name) {
  console.log(`${name} ran..`);
})("Bharath");

// Inside the object declare the function
const bdate = {
  getBirthday: function () {
    return 1995;
  }
};
console.log(bdate.getBirthday());

const bdate1 = {
  getBirthday: function (day) {
    return `June ${day}`;
  }
};
console.log(bdate1.getBirthday(2));
