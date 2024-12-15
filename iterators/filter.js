const arryOfFavChar = ["Penguin", "Batman", "Rust", "Jon Snow", "Logen Nine Fingers"]
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

// using filter and doing few operations

const getTheHero = arryOfFavChar.filter( (heroes) => {
    // below returns me the string which has a letter u and its length is more than 5
    return (heroes.includes("u") && heroes.length > 5)
} )

console.log(getTheHero)


// for each doesn't return anything hence an empty array is required so can append
const emptyArry = []
const getAnotherHero = arryOfFavChar.forEach( (heroes) => {
    if (heroes === "Rust") {
        emptyArry.push(heroes)
    }
} )

console.log(emptyArry, getAnotherHero)  // getAnotherHero this will be undefined because forEach has not returned anything

const anotherEmpArry = []
anotherEmpArry.push(obj)
console.log(anotherEmpArry)

// difference between map & filter is map will have the same length, but filer length will change based on the true statements returned

// Below is called chaining where 2 methods are used back to back
const changeNameOfHeroes = arryOfFavChar.map( (nameHero) => {
    return nameHero + "Fav"
}).filter( (nameHero) => {
    return nameHero.includes("g")
})

console.log(changeNameOfHeroes)