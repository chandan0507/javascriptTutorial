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

console.log(obj["name"]);
console.log(obj["logginDetails"][0]); // accessing object using key, which is of array type hence using indexing
console.log(obj["address"]["state"]); // accessing object using key, where value is of object type, hence again accessing using key

// Object.freeze(obj) // No more modifications could be done for this object

obj["name"] = "ChanUbale" // here name key value is not changed, because object is freezed

console.log(obj["name"]);

obj["greeting"] = function () {
    return `Hello JS ${this["name"]}`; // this keyword is used here, So that the keys declared within the same object could be access, So this["name"] means the name key within this object
}

console.log(obj.greeting()); // here greeting becomes a method, because it is assigned to a anonymous function


const tinderApp = new Object(); // singleton object

tinderApp['id'] = "chanUbale";
tinderApp['location'] = {stateFrom : ['karnataka', 'tamilNadu']} //list within a object within a object

console.log(typeof(tinderApp['location']['stateFrom']), tinderApp['location']['stateFrom']);

const obj3 = {...obj, ...tinderApp}; // combines both obj and tinderApp object and returns the value into a new obj3 object

console.log(typeof(obj3), obj3)

console.log(Object.entries(tinderApp));
console.log(tinderApp);

const {location} = tinderApp; // this is called deconstruction, location is a key in tinderApp object, it is separated, so could be used as a separate variable also
console.log(location)

console.log(JSON.stringify(tinderApp)); // js object is converted into json