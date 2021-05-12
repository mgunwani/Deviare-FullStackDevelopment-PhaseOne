
/**
 *  Object is a non-primitive data type.
 *  An object is a standalone entity that can hold properties and methods.
 *  In JS, an object can be created in two ways:
 *  a. Object Literal
 *  b. Object Constructor
 */

// // Empty Object Literal
// var person = {};
// // Attaching Properties
// person.firstName = "King";
// person.lastName = "Kochhar";
// // Attaching Method
// person.getFullName = function () {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
// // Access the Object Literal
// console.log(person.firstName);
// console.log(person.lastName);
// person.getFullName();

// ------------------------------------------------------ //

// Object Literal with Properties and Methods
// var person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     address: {
//         houseNo: 123,
//         streetName: 'Civil Lines',
//         city: 'Delhi',
//         country: 'India',
//     },
//     getFullName: function () {
//         console.log(`${this.firstName} ${this.lastName}, ${this.address.country}`);
//     },
//     displayDetails: () => {
//         console.log('Person Details');
//         console.log(`First Name : ${person.firstName}`);
//         console.log(`Last Name : ${person.lastName}`);
//         console.log(`Current City : ${person.address.country}`);
//     }
// }

// Access the Object Literal
// console.log(person.firstName);
// console.log(person["lastName"]);
// console.log(person.address);
// console.log(person.address.houseNo);
// console.log(person.address.streetName);
// console.log(person.address.city);
// console.log(person.address.country);
// person.getFullName();
// person.displayDetails();

// ------------------------------------------------------ //