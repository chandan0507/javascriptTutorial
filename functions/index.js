function addTwoNum(aNum, bNum) {
    if (typeof(aNum) === "string" || typeof(bNum) === "string") { // String is a method, so should use small "string" during type check
        return `${typeof(aNum)}, ${typeof(bNum)}`;
    }
    return aNum + bNum
}

const obj = {
    name : "chandan",
    lastName : "ubale",
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

console.log(addTwoNum(2, 10));

function takeNewObj(objectReturn) { // can name any variable, and access the keys of object
    let newVar = objectReturn["name"].toUpperCase().concat(" ", objectReturn["lastName"].toUpperCase()) // logginDetails is going to return an array
    let oldVar = objectReturn["name"].includes("chandan")
    return `${newVar}, ${oldVar}`
}

console.log(takeNewObj(obj)); // passing an object to the function takeNewObj

const newArry = ["chan", "bro", 23, 1, true];

function passArray(arrayReturn) {
    return `${arrayReturn[0].to}` // items of array could be accessed using normal indexing
}

console.log(passArray(newArry)); // array is passed directly