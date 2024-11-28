// declaring an array

const arry1 = ["2021-01-25", "2021-02-25", "chan", 1, true]
const arry2 = [true, 6]

let date1 =  new Date(arry1[0]); // accesing an array using index
let date2 =  new Date(arry1[1]);

console.log(date1 > date2);
console.log(date1 < date2);
console.log(date1 == date2);

arry1[1] = "new"; // will replace whatever value is in index 1

console.log(arry1);
console.log(arry1.concat(arry2)); // concatinates 2 array or includes items at the end, wont change original array
console.log(arry2);
console.log(typeof(arry1.toString())); // converts array into a string

arry1.push("thisOne", 2, true); // changes original array and updates the items at the end
arry1.pop() // removes the last item from array permanently
let arry3 = arry1.slice(1, 4) // takes from index 1 to 3 and puts into new array, withou changing original array

console.log(arry1); // Numbers, string,then boolean
console.log(arry3.includes("Chan")); // returns true if given value is present in array, else false

const arry4 = ["zewType", 4, false];
arry1.push(arry4, false);
console.log(arry1.sort()); // numbers, string/boolean/array => for these 3 the first letter or in terms of array first item matters


console.log(arry1.reverse()); // this will reverse the whole array items
