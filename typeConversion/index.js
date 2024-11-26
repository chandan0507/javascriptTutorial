let givenNum  = "3.9382";

console.log(typeof(givenNum));

console.log(typeof(Number(givenNum))); // here if the string contains number, it is converted into Number type itself

console.log(typeof(Math.PI));

let givenString = "chan";
let givenNewString = "";

console.log(typeof(givenString));

let storeStringVal = Number(givenString);
let storeBoolVal = Boolean(givenString);

console.log(typeof(Number(givenString)), storeStringVal, typeof(givenNewString), givenNewString); // if there is a valid string & we try to convert that, then we will get an output as NaN(Not A Number)

console.log(typeof(Boolean(givenString)), storeBoolVal, typeof(Boolean(givenNewString)), Boolean(givenNewString)); // within a string, if there is any value, even a space then it is treated as true else false

//number to bool

let numBe = 224.3;

console.log(Boolean(numBe), typeof(Boolean(numBe)));

// boolt to number

let boolValbe = false;

console.log(Number(boolValbe), typeof(Number(boolValbe)));

// bool to string

console.log(String(boolValbe), typeof(String(boolValbe)));