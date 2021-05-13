
/*
 *  JavaScript Hoisiting: Hoisting is default behavior of
 *  moving all declrations to the top of their function scope.
 */

// var a;      // declaration
// a = 1;      // assignment
// var a = 1;  // initialization


// var a = 1;
// var b = 2;
// var c = 3;
// console.log(`${a}, ${b}, ${c}`);
// output: 1, 2, 3

// var a = 1;
// var b = 2;
// c = 3;
// console.log(`${a}, ${b}, ${c}`);
// var c;
// output: 1, 2, 3

// var a = 1;
// var b = 2;
// console.log(`${a}, ${b}, ${c}`);
// var c = 3;
// // output: 1, 2, undefined

// --------------------------------------------------------------- //

// Function Calling or Usage
myFunc();

// Function Declaration
function myFunc() {
    var a = 1;
    var b = 2;
    var c = 3;
    console.log(`${a}, ${b}, ${c}`);
}

