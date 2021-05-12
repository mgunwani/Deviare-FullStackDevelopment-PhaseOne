
/**
 *  Object Constructor:
 *  - Object is initialized with new keyword.
 *  - You can attach properties and methods using dot notation.
 *  - You can also access properties with [] bracket.
 */

// Object Constructor
var person = new Object();
// Attach Properties and Methods to Object
person.firstName = 'Roger';
person['lastName'] = 'Lee';
person.age = 18;
person.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`)
}

// To access Object Constructor
console.log(person.firstName);
console.log(person.lastName);
if (person.hasOwnProperty('age'))
    console.log(person.age)
if (person.age > 18)
    console.log(person.age)
person.getFullName();
// To check the list of properties and Methods
for (var key in person) {
    console.log(key);
}