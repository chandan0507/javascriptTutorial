// below is importing axios

const getSelectOptionElement = document.querySelector('.select-and-option')
// console.log(getSelectOptionElement)
const parentElementSelect = document.querySelector('.container-two')
const addButtonClick = document.querySelector('#add-icon')
const submitButton = document.querySelector('.submit-container')
const deleteIcon = document.querySelectorAll('.deleteIcon')
let arry = []

addButtonClick.addEventListener('click', function () {
        const newElement = getSelectOptionElement.cloneNode(true)
        parentElementSelect.insertBefore(newElement, submitButton)

        // get all the input elements with class name as end-item, then set the value as none

        const endItemClass = newElement.querySelectorAll('.new-item')
        endItemClass.forEach((eachItem) => {
                eachItem.value = "";
        })
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
                if (getParent) {
                        getParent.remove()
                }

                // check if the event targetted contains a class name of submit-button
        } else if (event.target.classList.contains('submit-button')) {
                arry = []
                parentElementSelect.querySelectorAll('input').forEach((singleInputElement) => {
                        if (singleInputElement.value) {
                                arry.push(singleInputElement.value)
                                console.log(arry)
                                console.log('content is there', singleInputElement.value)
                                // need to sent 2 classes, because new-item is used while creation of new div, because to make there border as none for that particular div
                                singleInputElement.setAttribute('class', 'end-item new-item')
                        } else {
                                arry.push('ThisIsEmpty')
                                console.log('content is not there', singleInputElement.value)
                                // need to sent 2 classes, because new-item is used while creation of new div, because to make there border as none for that particular div
                                singleInputElement.setAttribute('class', 'singele-input new-item')
                        }
                })
                if (arry.includes('ThisIsEmpty')) {
                        alert('Please Provide All Inputs !')
                } else {
                        if (document.querySelector('#fileNameInput').value.length >= 5 && document.querySelector('#fileNameInput').value.length <= 20){
                                const result = confirm('Are You Sure ? ')
                                if (result){
                                getEachElementValue()
                                console.log('Success')
                                } else {
                                console.log('Failure')
                                }
                        } else {
                                alert('FileName length should be between 5 to 20')
                        }                
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
                if (sibling) {
                        sibling.remove()
                }
        }
})

let blocksOfDivArry = []
let jsonBodyDict = {}

function getEachElementValue() {
        // below is to get cuurent epoch time
        const currentEpochTime = Date.now();
        // below is appending into the jsonBody
        jsonBodyDict['txnId'] = currentEpochTime
        const getFileNameValue = document.querySelector('#fileNameInput').value
        // below is appending into the jsonBody
        jsonBodyDict['fileName'] = getFileNameValue
        const getProductNameValue = document.querySelector('#productNameInput').value
        // below is appending product name
        jsonBodyDict['productName'] = getProductNameValue
        const getWebPageValue = document.querySelector('#webUrlInput').value
        // below is appending url value
        jsonBodyDict['webUrl'] = getWebPageValue
        const getNumOfDivBlocks = document.querySelectorAll('.select-and-option')
        // below is required to clear the blockOfDivArry on second time click of submit button
        blocksOfDivArry = []
        for (let index = 0; index < getNumOfDivBlocks.length; index++) {
                const tempSelectorDic = {};
                const element = getNumOfDivBlocks[index];
                const getselectorValue = element.querySelector('#selector').value
                // appending values into tmp dictionary
                tempSelectorDic['selectorKey'] = getselectorValue
                const getselectorInput = element.querySelector('#selectorUserInput').value
                // appending selector input into tmp dictionary
                tempSelectorDic['selectorValue'] = getselectorInput
                const getOperationInput = element.querySelector('#option').value
                // appending getOpeartionInput into temp dictionary
                tempSelectorDic['optionKey'] = getOperationInput
                const getWaitTimeInput = element.querySelector('#option-time').value
                // appending waitTime into temp dictionary
                tempSelectorDic['waitTime'] = getWaitTimeInput
                const getUserDescription = element.querySelector('#userDescription').value
                // appending description into temp dictionary
                tempSelectorDic['description'] = getUserDescription
                if (getOperationInput === 'input'){
                        const getOpeartionValue = element.querySelector('#input-element').value;
                        tempSelectorDic['optionValue'] = getOpeartionValue
                } else {
                        tempSelectorDic['optionValue'] = null
                }
                blocksOfDivArry.push(tempSelectorDic);
        }
        jsonBodyDict['actions'] = blocksOfDivArry
        console.log(jsonBodyDict)
        apiPost(jsonBodyDict)
}

function apiPost(jsonBody) {
        axios.post('http://10.0.1.127:8082/postUserInput', jsonBody, {headers: {'Content-Type': 'application/json'}
        })
          .then(response => {console.log('Response:', response.data);
                if(response.data['errorMessage'] === 'Success') {
                        alert('File is added successfully')
                }
          })
          .catch(error => {console.error('Error:', error);
          });
}