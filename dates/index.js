const dateObj = new Date("2021-03-25"); // year-month-date
const dateObj2 = new Date(); // current date and time

console.log(dateObj);
console.log(dateObj.toString(), typeof(dateObj.toString()));
// console.log(dateObj.toISOString());


console.log(dateObj.getDay() + 1); // month, day, hour, minutes and all are in index format

console.log(String(dateObj.getTime()).length, String(dateObj2.getTime()).length); // checking length of milliseconds by converting to string

let getTime1 = dateObj.getTime();
let getTime2 = dateObj2.getTime();

console.log(getTime1 > getTime2);
console.log(getTime1 < getTime2);
console.log(getTime1 == getTime2);

