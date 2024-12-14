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

let checkLength = typeof(obj["name"].length)
console.log(checkLength)
console.log(obj["logginDetails"].length)

// obj["name"] = "chan";

// check on object length comparision

if (obj["name"].length > 7) {
    console.log(`${obj["name"]} length is greater than 7`)
} else if (obj["name"].length > 5) {
    console.log(`${obj["name"]} length is greater than 5`)
} else {
    console.log(`${obj["name"]} length is less than 5`)
}

// multiple validations using and & or

function checkUserActivation(objectForUserCheck) {
    if (objectForUserCheck["loggedIn"] && objectForUserCheck["logginDetails"].length > 2){
        return `${objectForUserCheck["name"]} is a active user`
    } else {
        return `${objectForUserCheck["name"]} is not an active user`
    }
}

let returnedCheckValidator = checkUserActivation(obj)
console.log(returnedCheckValidator)


// Below is switch statement, as an argument we should give a value, same will be evaluated in case statments
switch (obj["logginDetails"][1]) {
    case "Monday":
        console.log(`${obj["name"]} is active on Monday`)
        // break statement is very important here, else it will keep on continuing the execution even though true result is found
        break;
    case "Wednesday":
        console.log(`${obj["name"]} is active on Wednesday`)
        break;
    default:
        console.log(`${obj["name"]} is usually not active`)
        break;
}

// for undefined, null & "" it is considered as empty, and hence false will be returned

// for empty [] array and {} object true is returned
const userName = undefined

if (userName) {
    console.log(`Found username : ${userName}`)
} else if (!userName) {
    console.log(`No username ${Boolean(userName)}`)
}

// to check if any object is empty

const emptyObject = {}
// using the Object constructor, we can get the keys() method. where array of keys is returned for that we can check the length = 0 or not
console.log(`${Object.keys(emptyObject).length === 0}`)
