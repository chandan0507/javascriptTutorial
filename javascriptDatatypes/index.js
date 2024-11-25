// Datatypes in javascript

let number = 1;
let decimalValue = 2.79;
let wordBe = "chan";
let unDefined;
let emptyVal = null;

const arrayBe = ["The", "New", "Pengiun", 23];
const objectBe = {firstName : "chan", lastName : "ubale", numObj : 24};

console.log(typeof number);
console.log(typeof decimalValue);
console.log(typeof wordBe);
console.log(typeof arrayBe); // array is also treated as object
console.log(typeof objectBe); // dictionary is called as object in js
console.log(typeof unDefined);
console.log(typeof emptyVal); // null is also treated as object

console.log(typeof arrayBe[0], typeof arrayBe[3]); // items have there own datatype
console.log(typeof objectBe.firstName, typeof objectBe.numObj); // items have there own datatype
