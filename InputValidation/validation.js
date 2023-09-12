function submit_info (){
    console.log('clicked');
    let username = document.getElementById('user_id').value;
    console.log('user name is :', username);
    const password = document.getElementById('password_id').value;
    console.log('password is', password);

    // value refresh when get a needed one
    user_id.value = '';
    password_id.value = '';
    
}