/*
 *      Value Types (Primitive Data Types): Value Types are copied by their value.
 *          String, Number, Boolean, Null, Undefined
 */

/* Primitive Data Type: String */

// var firstName = 'Bhawna';
// var lastName = "Gunwani";
// console.log(firstName + ' ' + lastName);
// console.log(`Welcome ${firstName} ${lastName}!!`);

// var fName = new String("Hello World");
// console.log(fName);
// console.log(typeof fName);

// ---------------------------------------------------------- //

/* Primitive Data Type: Number */

// var number = 100;
// console.log(number);
// console.log(typeof number);

// var num1 = new Number(1000);
// console.log(num1);
// console.log(typeof num1);

// var num1 = new Number(1000);
// var num2 = new Number(1000);
// var num3 = 1000;
// console.log(num1 == num2);  // false, num1 and num2 are two different object.
// console.log(num1 == num3);  // true  
// console.log(num1 === num3); // false, === checks for type and value both. Thus, value is same but type is not. 

// ---------------------------------------------------------- //

/* Primitive Data Type: Boolean */

// var isValid = true;
// console.log(isValid);
// console.log(typeof isValid)
// console.log((isValid == true) ? "Good" : "Bad");    // Conditional/Turnary Operator
// console.log(isValid ? "Good" : "Bad");

// JavaScript treats empty string, 0, undefined and null as false.
// Rest, everything is true.

// var b1 = new Boolean("");
// var b2 = new Boolean(0);
// var b3 = new Boolean(undefined);
// var b4 = new Boolean(null);
// var b5 = new Boolean(NaN);
// var b6 = new Boolean("Hello");
// var b7 = new Boolean(1);
// console.log(b1);
// console.log(b2);
// console.log(b3);
// console.log(b4);
// console.log(b5);
// console.log(b6);
// console.log(b7);

// ---------------------------------------------------------- //

/* Primitive Data Type: Null and Undefined */

// null means absence of value.
// undefined means lack of value.
// null and undefined evaluates to false in conditional expressions.

// lack of value
// var value1;
// console.log(value1);
// if (value1)
//     console.log('Good');
// else
//     console.log('Bad');

// absence of value
// var value2 = null;
// console.log(value2);
// if (value2)
//     console.log('Very Good');
// else
//     console.log('Very Bad');








