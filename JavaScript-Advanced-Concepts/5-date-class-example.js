
/**
 *  JS provides Date object to work with date and time.
 *  A date includes:
 *  days, months, years, hours, minutes, seconds and milliseconds
 */

var currentDate = new Date();

var date1 = new Date("10 February 2021");
var date2 = new Date("February 2021 3");
var date3 = new Date("10 February 2021 20:21:45");

console.log(currentDate);
console.log(date1);
console.log(date2);
console.log(date3);

console.log(date3.getDay());