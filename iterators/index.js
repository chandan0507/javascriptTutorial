const obj = {
    name : "chandan",
    passwd : "Havefaith",
    email : "chandan@gmail.com",
    loggedIn : true,
    logginDetails : ["Monday", "Wednesday"],
    address : {
        district : "Bangalore",
        state : "Karnataka",
        country : "India"
    }
}

for (let i =0; i < obj["logginDetails"].length; i++) {
    console.log(`${obj["logginDetails"][i]}, Actual i value : ${i}`)
}

for (let cal = 0; cal < 10; cal++) {
    if (cal % 2 === 0) {
        console.log(`Even numbers ${cal}`)
    } else {
        console.log(`Odd numbers ${cal}`)
    }
}


let str = "*"
for (let i =0; i < 5; i++) {
    console.log(str)
    if (str.length < 5) {
        str = str + "*"
    } 
}

// Only print the odd numbers & skip even numbers
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue
    } else if (i === 9) {
        console.log(`We have hit ${i}`)
        break
    }
    // Once 9 is detected below will not be executed
    console.log(`This is an odd number : ${i}`)
}

// ======================== while loop starts from below

let count = 0
while(count < 5) {
    console.log(`Count value ${count}`)
    count += 2
}

let countArry = 0

while (countArry < obj["logginDetails"].length) {
    console.log(`Values of the array is ${obj["logginDetails"][countArry]}`)
    countArry += 1
}

// looping through the keys and values of the object

let objCounter = 0
while (objCounter < Object.keys(obj).length) {
    console.log(`${Object.keys(obj)[objCounter]} contains value as ${Object.values(obj)[objCounter]}`)
    objCounter += 1
}

// for of loop is used to iterate through arrays and objects

// to print objects first we need to get hold of the entries

for (let [key, value] of Object.entries(obj)) {
    console.log(`Key is : ${key} and its value is : ${value}`)
}

for (const element of obj["logginDetails"]) {
    console.log(element)
}

const greets = "Hello World!"
for (const greet of greets) {
    if (greet === " ") {
        continue
    }
    console.log(greet)
}

// Mainly for objects for in loop is used than for of loop

for (const key in obj) {
    console.log(`Value for the key : ${key} is ${obj[key]}`)
}

// for in is specially designed for objects, and for of is specially designed for arrays

for (const key in greets) {
    if (key === " "){
        continue
    }
    console.log(`${greets[key]}`)
}