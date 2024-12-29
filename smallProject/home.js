const getSelectOptionElement = document.querySelector('.select-and-option')
// console.log(getSelectOptionElement)
const parentElementSelect = document.querySelector('.container-two')
const addButtonClick = document.querySelector('#add-icon')
const submitButton = document.querySelector('.submit-container')
const deleteIcon = document.querySelectorAll('.deleteIcon')

addButtonClick.addEventListener('click', function () {
        const newElement = getSelectOptionElement.cloneNode(true)
        parentElementSelect.insertBefore(newElement, submitButton)
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

        }
})

parentElementSelect.addEventListener('change', (event) => {
        if (event.target.value === 'input') {
                console.log('OK')
                        const inputElementCreate = document.createElement('input')
                        const getParentOfInput = event.target.closest('.selector-container')
                        inputElementCreate.setAttribute('type', 'text')
                        inputElementCreate.setAttribute('placeholder', 'Enter the value of Option')
                        inputElementCreate.setAttribute('class', 'end-item')
                        inputElementCreate.setAttribute('id', 'input-element')
                        if (!getParentOfInput.querySelector('#input-element')) {
                                getParentOfInput.appendChild(inputElementCreate)

                        }
        } else if (event.target.value === 'click') {
                        console.log(event.target)
                        const getSelectElement = event.target
                        const selectParent = getSelectElement.parentNode
                        const sibling = selectParent.querySelector('#input-element')
                        console.log(sibling)
                        if (sibling){
                                sibling.remove()  
                        }
                }
})

submitButton.addEventListener('click', () => {
        // storing result of confirm and validating the output
        const result = confirm('Sure')
        if (result) {
                console.log('Success')
        } else {
                console.log('Failure')
        }
})

