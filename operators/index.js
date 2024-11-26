// string concatination

console.log("chan" + " ubale");
console.log("chan",  "ubale"); // this is much preferable for string concationation, aviods confusion

// numberic operation

console.log("1" + 1 + 1 + 1); // here everything is converted into string and concatination is done
console.log(1 + 1 + 1 + "1"); // here the first 3 is added & then concatinated with the string

console.log("1" + (1 + 1 + 1)); // here expecetd result is 13
console.log((1 + 1 + 1) + "1"); // here expected result is 31, using () avoids confusion