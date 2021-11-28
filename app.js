console.log('heyy there I am Javascript');
// Single line comments start with //.

// Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

// Data types in Javascript
// five primitive datatypes - strings, numbers, booleans, undefined, and null
console.log(typeof 'Junaid');
console.log(typeof 12);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

// Other two datatypes objects and arrays
console.log(typeof {}); // Object
console.log(typeof []); // Array

// Arithmatic operations
let a = 10,
  b = 5;
console.log(a + b); // a plus b  -15
console.log(a - b); // a minus b - 5
console.log(a * b); // a times b - 50
console.log(a / b); // a divided by b - 2
console.log(a ** b); // a to the power b -100000
console.log(a % b); //remainder after divding a by b -0

// Uniary operators in javascript
// ++ auto increament increases the value by 1
// -- auto decreament decreases the values by 1
a++;
console.log(a);
a--;
console.log(a);

// a++ is same as a=a+1
// a-- is sane as b=b-1

// Variables
// Variables are the containers to store the data(values).
// There are three ways to declare a variable in Javascript -
// 1) Let
// 2) Var
// 3) Const

// var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.

// Example - Redeclaration
// 1) Var
// var name ='Junaid'
// var name ='Juned'
// no error because re declarations is possible

// 2)Let
// let  name ='Junaid'
// let  name ='Juned'
// Error because re declarations is not possible

// 3)Const
// const  name ='Junaid'
// const  name ='Juned'
// Error because re declarations is not possible

// Example - Reassignment

// 1) Var
// var no =5
// no=6
// no error because reassignment is possible

// 2)Let
// let age =20
// age =21
// no error because reassignment is possible

// 3)Const
// const name ='Hamza'
// name = 'M.Hamza'
// Error because reassignment is possible

// Example - Scope
// NOTE:-With let, redeclaring a variable in the same block is NOT allowed:
// Redeclaring a variable inside a block will not redeclare the variable outside the block:

// 1) Var x = 10;
// // Here x is 10

// {
// var x = 2;
// // Here x is 2
// }

// // Here x is 2

// 2) Let
// let x = 10;
// // Here x is 10

// {
// let x = 2;
// // Here x is 2
// }

// // Here x is 10

// 3) Const
// const age = 20;
// // Here age is 20

// {
// const age = 21;
// // Here age is 21
// }

// // Here age is 20

// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Operator	Example	Same As
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y
