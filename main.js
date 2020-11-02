// we make variables for each block

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', (e) => { // add eventlistener on submit button 
    e.preventDefault();


    checkInputs();
});
function checkInputs(){
    //Getting the values from the inputs and using trim to remove all whitespace from strings.
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phoneNumberValue = phonenumber.value.trim();

    if(nameValue === ''){
        //show error
        // if not we push error
        setErrorFor(name, 'Name is required') // error will show if no name is put in 
    } else {
        // we show success
        setSuccessFor(name)
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email is required') //if no email is put in an error message will appear

    } else if (!isEmail(emailValue)){ //Here we are checking if email is valid with the email ID expression I found on google
        setErrorFor(email, "Email is not valid")
    } else {
        setSuccessFor(email);   //if email is successful it will show successful 
    }
    
    if(passwordValue === ''){
       
        setErrorFor(password, 'Password is required') 
    } else {
        setSuccessFor(password)
    }

    if(phoneNumberValue.length === 7){ //If the phone number is equal to 7 it will show success otherwise it will show an error
        setSuccessFor(phonenumber);
    } else {
        setErrorFor(phonenumber, 'Phone number is too short');
    }

function setErrorFor(input, message){
    const formControl = input.parentElement;  //form-control div
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
function isEmail(email){
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}}