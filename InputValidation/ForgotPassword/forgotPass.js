

function submitHere(){
    console.log('here');
    const newPasswordd = document.getElementById('password').value;
    console.log('new password', newPasswordd);
    const ReNewPassword = document.getElementById('reTypepass').value;
    console.log('Renew Password', ReNewPassword);

    //get error message
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';
    const errorMessages1 = document.getElementById('errorMessagesNew');
    errorMessages1.innerHTML = '';


    if((newPasswordd === '') && (ReNewPassword === '')){
        errorMessages1.innerHTML += 'add password first'

    }
    if(!(newPasswordd === ReNewPassword)){
        errorMessages.innerHTML += 'Not Match password'
        return;
    }
    // else{
    //     alert('successfully done')

    // }
    
}