
/**
 *  In JS, arrays are also non-primitive type.
 *  It stores the homogenous data.
 *  The elements of an array can access by index element.
 *  Index element starts with 0 and ends at n-1.
 */

// Array Literal
// var array = [100, 200, 300];
// var array = [100, 200, 300, "hundred", true];
// console.log(array);

// Array Constructor
var array1 = new Array();
// array1[0] = "King";
// array1[1] = "Kochhar";
// array1[2] = "Smith";
// array1[3] = "Smith";
// console.log(array1[0]);
// console.log(array1[1]);
// console.log(array1[2]);
// console.log(array1[3]);

// Iterate the Array elements

var array2 = new Array();
array2[0] = "King";
array2[1] = "Kochhar";
array2[2] = "Smith";
array2[3] = "Smith";
// For Loop
for (let index = 0; index < array2.length; index++) {
    console.log(array2[index]);
}
console.log("--------------");
// ForEach Loop (in prints the element index)
for (var item in array2) {
    console.log(item);
}
// ForEach Loop (of prints the element value)
for (var item of array2) {
    console.log(item);
}