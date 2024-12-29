const getSelectOptionElement = document.querySelector('.select-and-option')
// console.log(getSelectOptionElement)
const parentElementSelect = document.querySelector('.container-two')
const addButtonClick = document.querySelector('#add-icon')
const submitButton = document.querySelector('.submit-container')
const deleteIcon = document.querySelectorAll('.deleteIcon')

addButtonClick.addEventListener('click', function () {
        const newElement = getSelectOptionElement.cloneNode(true)
        parentElementSelect.insertBefore(newElement, submitButton)
        // once inserted then we are checking if the parent has any child element with id input-element, if if check this before, then there will be no element yet so willl not be able to find and delete
        const getTheInput = newElement.querySelector
        ('#input-element')
        if (getTheInput) {
                getTheInput.remove()
        }
})

// Below code works because, parentElementSelect is not effected by including new child elemets within it. That is how DOM works

// But when i try to select deleteIcon.foreach loop, only the elements avail when page had loaded will be able to delete, new clonNodes will not be included in nodeList

// selected the whole parentElementSelect to listen on click event
parentElementSelect.addEventListener('click', (event) => {
        // particularly only targetting the element if it has class of deleteIcon
        if (event.target.classList.contains('deleteIcon')) {
                // storing the closest available parent class
                const getParent = event.target.closest('.select-and-option')
                // if there is any such element other than null, then it is removed
                if(getParent){
                        getParent.remove()
                }  
        
                // check if the event targetted contains a class name of submit-button
        } else if (event.target.classList.contains('submit-button')) {
                // confirm message is stored in result
                const result = confirm('Sure')
                // if result is not null, then its success, else failure
                if (result) {
                        console.log('Success')
                } else {
                        console.log('Failure')
                }
        }
})

parentElementSelect.addEventListener('change', (event) => {
        // element targeted is select, but because which is visible option that will be treated as value
        if (event.target.value === 'input') {
                console.log('OK')
                        const inputElementCreate = document.createElement('input')
                        // from the targetted block, will search which is the closest parent with class as selector-container
                        const getParentOfInput = event.target.closest('.selector-container')
                        inputElementCreate.setAttribute('type', 'text')
                        inputElementCreate.setAttribute('placeholder', 'Enter the value of Option')
                        inputElementCreate.setAttribute('class', 'end-item')
                        inputElementCreate.setAttribute('id', 'input-element')
                        // checks if there is already any element with id input-element, only it is not there means will add
                        if (!getParentOfInput.querySelector('#input-element')) {
                                getParentOfInput.appendChild(inputElementCreate)

                        }
        } else if (event.target.value === 'click') {
                        console.log(event.target)
                        // below will get the select element from targetted event
                        const getSelectElement = event.target
                        // below will get the parent of targetted select element
                        const selectParent = getSelectElement.parentNode
                        // below will get the child element with id as input-element
                        const sibling = selectParent.querySelector('#input-element')
                        console.log(sibling)
                        // if such an element exist then remove it
                        if (sibling){
                                sibling.remove()  
                        }
                }
})

