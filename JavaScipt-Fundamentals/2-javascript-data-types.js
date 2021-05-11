
/**
 *
 * JavaScript Data Types:
 *
 *      Value Types (Primitive Data Types): Value Types are copied by their value.
 *          String, Number, Boolean, Null, Undefined
 *
 *      Reference Data Types (Non-Primitive Data Types): Ref Types are copied by their references.
 *          Object, Date, Array
 *
 */

// Values Types are Independent.
// Change in the value of x will not reflect the value of y.

let x = 100;
let y = x;
console.log(`x : ${x} , y : ${y}`);
x = 300;
console.log(`x : ${x} , y : ${y}`);

console.log("----------------------------------------");

// Reference Types are dependent.
// Change in the value of x1.value will also reflect the y1.value.

let x1 = { value: 100 };
let y1 = x1;
console.log(`x1 : ${x1.value} , y1 : ${y1.value}`);
x1.value = 300;
console.log(`x1 : ${x1.value} , y1 : ${y1.value}`);


