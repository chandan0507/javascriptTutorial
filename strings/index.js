// link : https://www.w3schools.com/js/js_string_methods.asp

let nameOfUser = "chandan";
let regNum = 72;

console.log(`name of the user is ${nameOfUser} and his reg number is ${regNum}`); // modern day js syntax of variable concatination

console.log(nameOfUser[0]); // to access the index of string
console.log(Number(String(regNum)[0]), typeof(Number(String(regNum)[0]))); // only accessing string is possible, not number. So converted and then accessed

console.log(nameOfUser.length); // returns the length of the string

console.log(nameOfUser.slice(1, 6)); // returns the from and to index position char

console.log(nameOfUser.indexOf('v')); //  when val doesn't exist -1 is returned

console.log(nameOfUser.replace("cha", "yo")); // taken 2 arguments, 1 value to be replace, 2 value to be replaced with

