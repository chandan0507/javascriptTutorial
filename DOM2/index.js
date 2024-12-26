const parent = document.querySelector('.parent')
console.log(parent)
console.log(parent.children)
console.log(parent.children[parent.children.length - 1])
console.log(parent.children[0]) // cannot access lastElementChild using -1 here, will get undefined

// Below code got the html collection using the children property, html collection is like an array, so we can loop through them
for (let index = 0; index < parent.children.length; index++) {
    // Below will  get the child element using index, and if that child element innerHTML value is Wednesday then it will change its color to red
    if (parent.children[index].innerHTML === 'Wednesday'){
        parent.children[index].style.color = 'red'
    }
    console.log(parent.children[index].innerHTML);
    
}

console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

// getting the parent using a child element

const child = document.querySelector('.day') // as we have used querySelector, index 0 is only returned

console.log(child.parentElement.innerText)

// Creating a new element

const newElement = document.createElement('div')
console.log(newElement)
newElement.setAttribute('id', 'chan')
newElement.setAttribute('class', 'main') // set only 1 class
newElement.setAttribute('class', 'main container') // set multiple class
newElement.innerHTML = 'This is a new element'
// Using below can insert newElement before the 2nd child of parent element. arg 1 is the newElement and arg 2 is the element after the newElement
const newElement2 = newElement
parent.insertBefore(newElement, parent.children[1])
parent.insertBefore(newElement2, parent.children[4]) // 1 created new element could be appended only once in 1 desired position

// Below is a fuunction to create ew elemnt

function createNewElement(newElement, userId, userClass, userContent, userIndex) {
    const newElementName = document.createElement(newElement)
    newElementName.setAttribute('id', userId)
    newElementName.setAttribute('class', userClass)
    newElementName.innerHTML = userContent
    parent.insertBefore(newElementName, parent.children[userIndex])
}

createNewElement('h1', 'coloring', 'differ', 'This is week of month', 4)
createNewElement('p', 'coloring', 'differ', 'This is day of the week', 6)
createNewElement('h2', 'coloring', 'differ', 'This is hour of the day', 7)