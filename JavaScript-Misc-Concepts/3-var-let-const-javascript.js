
/**
 * var: function-scoped and global-scoped
 * let: blocked-scoped
 * const: blocked-sope but can't reassigned.
 */

/**
 * var keyword:
 *  - Function-scoped or globally scoped.
 *  - Accidental Global Variables
 *  - Reassignable and Redeclarable
 */

// var city = 'Delhi';
// console.log(city);

// function print() {
//     var city = 'New York';
//     city = 'New York Again';
//     console.log(city);
// }
// print();

/**
 * let keyword:
 *  - Block Scoped
 *  - Subject to temporal dead zone.
 *  - reassignable but not redeclarable
 */

let city = 'Delhi';
// city = 'New York'
let city = 'New York';

function print() {
    city = 'Chennai'        // Reassignable
    let city = 'Mumbai';    // ReInitializable
    // let city = 'Hyderabad'; // Not Redeclarable (SyntaxError)
    let country = 'India';
    console.log(city)       // Delhi
    console.log(country);   // India
}

print();
console.log(city);          // Delhi
// console.log(country);       // ReferenceError


/**
 * const Keyword: 
 *  - Block Scoped
 *  - Subject to temporal dead zone.
 *  - not reassignable but not redeclarable
 */

const city = 'Delhi';
// city = 'New York'          // Not Re-Assignable
//const city = 'New York';    // Not Re-declarable


function print() {
    city = 'Chennai'        // Reassignable
    console.log(city);      // Delhi
    const country = 'India';
    console.log(country);   // India

}

print();
console.log(city);          // Delhi
console.log(country);       // ReferenceError


