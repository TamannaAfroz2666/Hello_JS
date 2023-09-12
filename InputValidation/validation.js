function submit_info (){
    // e.preventDefault()
    console.log('clicked');
    let username = document.getElementById('user_id').value;
    console.log('user name is :', username);
    const password = document.getElementById('password_id').value;
    console.log('password is', password);

    // value refresh when get a needed one
    user_id.value = '';
    password_id.value = '';
    
}

//function valid emation create

function validateEmail(email){
    const emailRange = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRange.test(email);
}