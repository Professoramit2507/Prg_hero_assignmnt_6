1) Difference between var, let, and const
Scope:
var → Function-scoped
let → Block-scoped
const → Block-scoped


Hoisting:
var → Yes, initialized as undefined
let → Yes, but not initialized (temporal dead zone)
const → Yes, but not initialized (temporal dead zone)


Reassignment:
var → Yes
let → Yes
const → No, cannot reassign


Redeclaration:
var → Yes
let → No
const → No
Example:
var a = 10;
var a = 20; 

let b = 10;
// let b = 20; 

const c = 30;
// c = 40;  


2) Difference between map(), forEach(), and filter()


forEach()
Purpose: Iterates over each element and executes a function
Return value: undefined
Mutates original array? No


map()
Purpose: Iterates and transforms each element
Return value: New array with transformed elements
Mutates original array? No


filter()
Purpose: Iterates and selects elements based on a condition
Return value: New array with only matching elements
Mutates original array? No


Example:
const arr = [1, 2, 3, 4];

// forEach
arr.forEach(x => console.log(x * 2)); // Logs 2, 4, 6, 8

// map
const doubled = arr.map(x => x * 2); // [2, 4, 6, 8]

// filter
const even = arr.filter(x => x % 2 === 0); // [2, 4]



1) Arrow Functions in ES6
Arrow functions are a shorter syntax for writing functions. They also lexically bind this, unlike regular functions.
Syntax:
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;




4) Destructuring Assignment in ES6
Destructuring lets you unpack values from arrays or objects into separate variables.
Array destructuring:
const numbers = [1, 2, 3];
const [a, b, c] = numbers; 

Object destructuring:
const person = {name: "Amit", age: 25};
const {name, age} = person; 


You can also assign default values:
const {name, gender = "Male"} = person; 


5) Template Literals in ES6
Template literals allow embedding expressions inside strings using backticks (``) instead of quotes.
Example:
const name = "Amit";
const age = 25;

// Template literal
const message = `My name is ${name} and I am ${age} years old.`;

// Traditional concatenation
const oldMessage = "My name is " + name + " and I am " + age + " years old.";

Differences from concatenation:
Supports multi-line strings without \n.


Embeds variables and expressions directly with ${}.


Cleaner and more readable than + concatenation.

