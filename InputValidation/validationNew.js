const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateLoginForm);

function validateLoginForm(event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const errorMessages = document.getElementById('errorMessages');
    const errorMessages1 = document.getElementById('errorMessages1');
    errorMessages.innerHTML = '';
    errorMessages1.innerHTML = '';
  
    // Validate email
    if ((email.value === "") && password.value === "") {
        errorMessages.innerHTML += 'Please enter a email address.';
        errorMessages1.innerHTML += 'Please enter a  password.';
        email.value = '';
        password.value = '';
        return;
    }

    if (!validateEmail(email.value)) {
        errorMessages.innerHTML += 'Please enter a valid email address.';
        email.value = '';
        password.value = '';
        return;
    }
    // Validate password
    if (!validatePassword(password.value)) {
        errorMessages1.innerHTML += 'Please enter a valid password.';
        email.value = '';
        password.value = '';
        return;
    }

    // If all validations pass, submit the form
    alert('Login successful!');
}

function validateEmail(email) {
    // Use a regular expression to check if the email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    // Customize these rules to match your password requirements
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber
    );
}