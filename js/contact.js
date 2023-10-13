const username = document.getElementById('username');
const form = document.getElementById('form');
const password = document.getElementById('password');

// submit the form
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})
// function to set an error message
console.log(form);
// function to set success
const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    // set the success message to display through css
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
// function to set an error message
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
 
    // set the message on the page through css
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

 const validateInputs =() =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === ''){ //check if usernameValue is empty
        setError(username, 'username is required');
    }else{
        setSuccess(username);
    }

    if(passwordValue === ''){ //check if emailValue is empty
        setError(password, 'Password is required');
    }else if(passwordValue.length <8){ //check if email is valid
        setError(password, 'Password must be atleast 8 characters');
    }else{
        setSuccess(password);
    }

    if(usernameValue && passwordValue){
    window.location ='/pages/auction-page-all-items.html'
    }
 }

  