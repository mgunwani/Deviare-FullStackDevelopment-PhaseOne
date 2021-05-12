

function Person(fName, lName, age) {
    var firstName = fName || 'Bhawna';
    var currentAge = age || 18;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return firstName;
            },
            set: function (value) {
                firstName = value;
            }
        },
        "CurrentAge": {
            get: function () {
                return currentAge
            },
            set: function (value) {
                if (value <= 60) {
                    currentAge = value;
                }
            }
        }
    })

}

// Creating object of Person class:
var person1 = new Person();
console.log(person1.FirstName);
console.log(person1.CurrentAge);

person1.FirstName = "Jenkin";
person1.CurrentAge = 35;

console.log(person1.FirstName);
console.log(person1.CurrentAge);
