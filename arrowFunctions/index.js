const user = {
    username : "chan",
    lastName : "ubale",
    status : true,
    welcome : function() {
        console.log(`${this.username} ${this.lastName} is logged in`) // if i give normally as username, this even though it is in global scope, without the this keyword will not be able to access the same within a object
    },
    exit : function () { // in regular function this scope is until object, so it is able to access the variables within it
        return `${this.username} is logged out`
    },
    // arrowWelcome : () => {
    //     return `${this.username} again logged in`   in this arrow function it will always refer to the window object in browser and empty object in node.js
    // }
}

user.welcome()
user.username = 'bro'
user.welcome() // this change will gett refelected because it is refering to the current context using this keyword
console.log(user.exit())
// console.log(user.arrowWelcome())

// using arrow function reduces the code lines as below

const greet = (objOf) => (`greet the user ${objOf.username}`) // withiin parentheses means it is to return

console.log(greet(user));

((name) => {
    console.log(`this is ${name}`)
}) ('chan'); // this is called iifi function immediately invoked function