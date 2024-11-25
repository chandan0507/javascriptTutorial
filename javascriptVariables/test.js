const accoundId = 129273;
let accountName = "chandan";
var accountEmail = "chandanubale@gmail.com";
let accountState;

// accoundId = 29828; TypeError: Assignment to constant variable.

accountName = "yoyo"; // let keyword allows to change the value of the variable

accountEmail = "yoyo@gmail.com" // var keyword allows to change the value of the variable

// let accountName = "bro"; SyntaxError: Identifier 'accountName' has already been declared

var accountEmail = "bro@gmail.com"; // var keyword allows to re-declare the value of a variable

console.log(accoundId);
console.log(accountName);
console.log(accountEmail);

console.table([accoundId, accountEmail, accountName, accountState]); // Lets print the variable name and values in form of a table, hence the inputs are given as an array