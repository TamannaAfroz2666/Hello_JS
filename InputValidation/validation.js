function submit_info (){
    // e.preventDefault()
    console.log('clicked');
    let username = document.getElementById('user_email').value;
    console.log('user name is :', username);
    const password = document.getElementById('password_id').value;
    console.log('password is', password);

    const errorMessages = document.getElementById('errorMessages');

    // value refresh when get a needed one
    user_email.value = '';
    password_id.value = '';

    // check email valid or not 
    if(!validateEmail(user_email.value)){
        alert('please enter a valid email address');
        return;
    }
    if(! validatePassword(password_id.value)){
        alert ('Please enter a valid password');
        return;
    }
    alert('login successfully');
}

//function valid emation create

function validateEmail(email){
    const emailRange = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRange.test(email);
}

function validatePassword(password){
    const minLength = 8;
    const upperCase =/[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (password.length >= minLength && upperCase && lowerCase && hasNumber);

}