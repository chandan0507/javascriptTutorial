const getSelectOptionElement = document.querySelector('.select-and-option')
// console.log(getSelectOptionElement)
const parentElementSelect = document.querySelector('.container-two')
const addButtonClick = document.querySelector('#add-icon')
const submitButton = document.querySelector('.submit-container')
const deleteIcon = document.querySelector('.deleteIcon')

addButtonClick.addEventListener('click', function () {
        const newElement = getSelectOptionElement.cloneNode(true)
        parentElementSelect.insertBefore(newElement, submitButton)
})

deleteIcon.addEventListener('click', function () {
        const captureParent = deleteIcon.parentElement.parentElement
        captureParent.remove()

})