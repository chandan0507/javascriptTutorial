const obj = {
    username : 'chandan',
    password : 'chandan123'
}

const getUsername = document.querySelector('#username')
const getPassword = document.querySelector('#password')
const showPasswd = document.querySelector('#togglePassword')

document.querySelector('#submit').addEventListener('click', () => {
    if (!getUsername.value) {
        alert('Please provide username')
    }
    else if (!getPassword.value) {
        alert('Please provide password')
    }
    else if (getUsername.value === obj["username"] && getPassword.value === obj["password"]) {
        alert(`Welcome ${getUsername.value}`)
    } else {
        alert('Sorry username not found')
    }
})

showPasswd.addEventListener('click', function(e) {
    const checkPass = getPassword.getAttribute('type')
    if (checkPass === 'text') {
        getPassword.setAttribute('type', 'password')
    } else {
        getPassword.setAttribute('type', 'text')
    }
})