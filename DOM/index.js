const selectHTwo = document.querySelector('h2')
selectHTwo.setAttribute('class', 'newClass')


selectListTwo = document.querySelectorAll('li')

// Below is a function which loops through the selectListTwo querySelectorAll list and for each element it puts the newClass class

// Node list has forEach method
function changeTheList(sendTheElement) {
    sendTheElement.forEach((element) => {
        element.setAttribute('class', 'newClass')
    });
}

changeTheList(selectListTwo)

// Below is the best way to convert a nodeList into an array
const newArry = Array.from(selectListTwo)
newArry.filter( (chan) => {

    // checking if attribute name is equal to bro, then only setting the class attribute as This-is-another-class
    if (chan.getAttribute('name') === "bro"){
        chan.setAttribute('class', 'This-is-another-class')
    }
})

const changeArry = document.querySelector('.random')

changeArry.setAttribute('class', 'container')

const changeGrow = document.querySelector('.grow')
changeGrow.setAttribute('class', 'growMore')
