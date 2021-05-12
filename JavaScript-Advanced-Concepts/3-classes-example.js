
/**
 * 
 *  Vanila JavaScript: ECMAScript 5, doesn't have class type.
 *  Thus, it doesn't support object oriented programming like C# or Java.
 *  So, we can create a function in such as way so that it acts like a class.
 * 
 */

// // JavaScript Class
// function Person() {
//     this.firstName = 'Bhawna';
//     this.lastName = 'Gunwani';
//     this.getFullName = function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// // Creating object of Person class:
// var person1 = new Person();
// person1.getFullName();

// var person2 = new Person();
// person2.getFullName();

// ----------------------------------------------- //

// JavaScript Class
function Person(fName, lName) {
    this.firstName = fName || 'Bhawna';
    this.lastName = lName || 'Gunwani';
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// Creating object of Person class:
var person1 = new Person();
person1.getFullName();

var person2 = new Person('Sarah', 'Bowling');
person2.getFullName();