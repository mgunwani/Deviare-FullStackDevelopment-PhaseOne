
/**
 * The strict mode is a semantically stricter or restricted version of JS language.
 * This produces errors for those mistakes that are handled silently otherwise.
 */

// -------------------------------------- //

/** The strict mode is enabled for entire script or globally. */

// "use strict";
// x = 5;
// console.log(x);

// -------------------------------------- //

/** The strict mode is enabled only within a function. */

// x = 5;
// console.log(x);
// function sayHello() {
//     "use strict";
//     str = "Hello World";
//     console.log(str);
// }
// sayHello();

// -------------------------------------- //

/*
 * General Restriction in Strict Mode:
 *  1. Undeclared variables are not allowed.
 *  2. Deleting a variable or a function is not allowed.
 *  3. Duplicating a variable or a function is not allowed.
 *  4. The eval method cannot alter scope.
 *  5. The eval cannot be used as an identifier.
 *  6. The with statement is not allowed.
 *  7. Writing to a Read-Only Property is not allowed.
 *  8. Adding a new property to a non-extensible object is not allowed.
 */

// -------------------------------------- //

// 2. Deleting a variable or a function is not allowed.

// "use strict";

// var person = { name: 'Bhawna Gunwani', city: 'Delhi' };
// console.log(person);
// delete person;  // SyntaxError

// -------------------------------------- //

// 3. Duplicating a variable or a function is not allowed.

// "use strict";

// function addition(num, num) {
//     return num * num;
// }
// console.log(addition(10, 10));

// -------------------------------------- //

// 4. The eval method cannot alter scope.

// "use strict";

// eval("var x = 5;");
// console.log(x);

// -------------------------------------- //

// 5. The eval cannot be used as an identifier.

// "use strict";

// var eval = 10;
// console.log(eval);

// -------------------------------------- //

// var radius = 5;
// var result = Math.PI * radius * radius;
// console.log(result);

// 6. The with statement is not allowed.

// "use strict";

// var radius = 5;
// with (Math) {
//     var result = PI * radius * radius;
//     console.log(result);
// }

// -------------------------------------- //

// 7. Writing to a Read - Only Property is not allowed.

// "use strict";

// var person = { name: 'Bhawna Gunwani', city: 'Delhi' }
// Object.defineProperty(person, "gender", { value: 'Female', writable: false })
// person.gender = "F";    // SyntaxError
// console.log(person.gender);

// -------------------------------------- //

// 8. Adding a new property to a non-extensible object is not allowed.

"use strict";

var person = { name: 'Bhawna Gunwani', city: 'Delhi' }

console.log(Object.isExtensible(person));
Object.freeze(person);
console.log(Object.isExtensible(person));
person.gender = 'Female';
console.log(person.name + ': ' + person.gender);

// -------------------------------------- //
