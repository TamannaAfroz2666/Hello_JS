

function submitHere(){
    console.log('here');
    const newPasswordd = document.getElementById('password').value;
    console.log('new password', newPasswordd);
    const ReNewPassword = document.getElementById('reTypepass').value;
    console.log('Renew Password', ReNewPassword);

    //get error message
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';
    
    if(!(newPasswordd === ReNewPassword)){
        errorMessages.innerHTML += 'Not Match password'
    }
    else{
        alert('successfully done')

    }
    
}