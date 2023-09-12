function submit_info (){
    // e.preventDefault()
    console.log('clicked');
    let username = document.getElementById('user_email').value;
    console.log('user name is :', username);
    const password = document.getElementById('password_id').value;
    console.log('password is', password);

    // value refresh when get a needed one
    user_email.value = '';
    password_id.value = '';

    // check email valid or not 
    if(!validateEmail(user_email.value)){
        alert('please enter a valid email address')
        return;
    }
    
}

//function valid emation create

function validateEmail(email){
    const emailRange = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRange.test(email);
}