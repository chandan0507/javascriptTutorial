// https://www.w3schools.com/js/js_math.asp

const array1 = ["23", "thisIsString", 12]
console.log((Math.PI * "3") * array1[0]) // its always bettern choice to check the dataType, this is return 216


const floatingPoint = 234.13;

console.log(Math.round(floatingPoint)) // gives back, closest rounded value
console.log(Math.ceil(floatingPoint))
console.log(Math.floor(floatingPoint))
console.log(Math.pow(2, 5)) // this is used to returns power of value

console.log(Math.floor(((Math.random() * 10) + 1))) // random() returns 0 to 1 decimal value