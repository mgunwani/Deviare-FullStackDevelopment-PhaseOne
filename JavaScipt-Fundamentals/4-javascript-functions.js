
/**
 *  JavaScript Functions helps in modular programming.
 *  Different Types of Functions:
 *      - Simple Function
 *      - Function with Parameters
 *      - Function with Return Statement
 *      - Function Expressions
 *      - Annonymous Functions
 *      - Nested Functions
 *      - Arrow Functions
 */

// ----------------------------------------------------- //

// Definition: Simple Function
// function sayHello() {
//     console.log('Hello Everyone');
// }

// Call: Simple Function
// sayHello();
// sayHello();

// ----------------------------------------------------- //

// Definition: Function with Parameters
// function addition(num1, num2) {
//     // var result = num1 + num2;
//     // console.log(result);
//     console.log(`The sum of ${num1} and ${num2} : ${num1 + num2}`);
// }

// Call: Function with Parameters
// addition(100, 200);         // 300
// addition(1000, 2000);       // 3000
// addition(100, 200, 300);    // 300
// addition(100);              // 100 + undefined = NaN

// ----------------------------------------------------- //

// Definition: Function with Parameters and Return Statement
// function addition(num1, num2) {
//     return num1 + num2;
// }

// Call: Function with Parameters with Return Statement
// var result = addition(100, 200);
// console.log(result);
// console.log(addition(1000, 2000));

// ----------------------------------------------------- //

// Definition: Function Expression
// var showMessage = function sayHello() {
//     console.log('Hello Folks!!');
// }

// Call: Function Expression
// showMessage();

// ----------------------------------------------------- //

// Definition: Annonymous Function (Unnamed Function)
// var showMessage = function () {
//     console.log('Hello Folks!!');
// }

// Call: Annonymous Function (Unnamed Function)
// showMessage();
// showMessage();

// ----------------------------------------------------- //

// Definition: Nested Function
// function showMessage(name) {
//     function sayHello() {
//         console.log(`Hello ${name}`);
//     }
//     return sayHello();
// }

// Definition: Nested Function
// showMessage("Bhawna Gunwani");

// ----------------------------------------------------- //

// Comparing Traditional Functions with Arrow Functions

// var sayHello = function () { console.log('Hello Everyone'); }

var sayHello = () => console.log('Hello Folks');

var printNumber = (number) => console.log(`Number is ${number}.`);

var add = (number1, number2) => console.log(`Result is ${number1 + number2}.`);

var addNumbers = (number1, number2) => number1 + number2;
var addNumbers = (number1, number2) => { return number1 + number2; }

sayHello();
printNumber(100);
add(100, 200);
console.log(addNumbers(1000, 2000));

// ----------------------------------------------------- //












