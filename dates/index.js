const dateObj = new Date(); // date, month year
const dateObj2 = new Date();

console.log(dateObj);
console.log(dateObj.toString(), typeof(dateObj.toString()));
// console.log(dateObj.toISOString());


console.log(dateObj.getDay() + 1); // month, day, hour, minutes and all are in index format

console.log(dateObj.getTime());

console.log(dateObj.getTime() > dateObj2.getTime());
console.log(dateObj.getTime() < dateObj2.getTime());
console.log(dateObj.getTime() == dateObj2.getTime());

