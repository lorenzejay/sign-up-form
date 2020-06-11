const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === "" || firstName.value == null){
        messages.push('**First Name cannot be empty**');
    }
    else if (lastName.value === "" || lastName.value == null) {
        messages.push('**Last Name cannot be empty**');
    }
    else if (email.value === "" || email.value == null) {
        messages.push('**Email cannot be empty**');
    }
    else if (password.value === "" || password.value == null) {
        messages.push('**Password cannot be empty**');
    }
    
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    

})