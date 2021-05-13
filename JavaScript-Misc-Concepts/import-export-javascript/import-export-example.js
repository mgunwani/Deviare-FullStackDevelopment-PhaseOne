// import { addition, subtraction, multiplication, division } from "./mathematics.js";
// var x = 100;
// var y = 200;
// document.getElementById('x').textContent = x;
// document.getElementById('y').textContent = y;
// document.getElementById('addition').textContent = addition(x, y);
// document.getElementById('subtraction').textContent = subtraction(x, y);
// document.getElementById('product').textContent = multiplication(x, y);
// document.getElementById('divide').textContent = division(x, y);

// import * as maths from "./mathematics.js";
// var x = 100;
// var y = 200;
// document.getElementById('x').textContent = x;
// document.getElementById('y').textContent = y;
// document.getElementById('addition').textContent = maths.addition(x, y);
// document.getElementById('subtraction').textContent = maths.subtraction(x, y);
// document.getElementById('product').textContent = maths.multiplication(x, y);
// document.getElementById('divide').textContent = maths.division(x, y);

import {
    addition as sum,
    subtraction as subtract,
    multiplication as product,
    division as divide
} from "./mathematics.js";
var x = 100;
var y = 200;
document.getElementById('x').textContent = x;
document.getElementById('y').textContent = y;
document.getElementById('addition').textContent = sum(x, y);
document.getElementById('subtraction').textContent = subtract(x, y);
document.getElementById('product').textContent = product(x, y);
document.getElementById('divide').textContent = divide(x, y);

