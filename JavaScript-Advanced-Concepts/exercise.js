
/* Value Type with Function */

var number = 100;
function increase1(number) {
    number++;
    console.log('Number Inside : ', number);
}

increase1(number);
console.log('Number Outside : ', number);

// Output: Number Inside :  101, Number Outside :  100

// ---------------------------------------------------- //

/* Reference Type with Function */

var obj = { value: 100 };
function increase2(obj) {
    obj.value++;
    console.log('Value of Object (Inside) : ', obj.value);
}

increase2(obj);
console.log('Value of Object (Outside) : ', obj.value);