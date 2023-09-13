function submitInfo(){
 
    const userEmail = document.getElementById('emailId').value;
    console.log('user emil is', userEmail);
    const userName = document.getElementById('Name').value;
    console.log('user name is', userName);
    const userPassword = document.getElementById('passwordId').value;
    console.log('user password is ', userPassword);

    // error message for input field accessing 

    const errorMessagesEmail = document.getElementById('errorMessages');
    const errorMessagesName = document.getElementById('errorMessages1');
    const errorMessagesPass = document.getElementById('errorMessages2');
    errorMessagesEmail.innerHTML = '';
    errorMessagesName.innerHTML = '';
    errorMessagesPass.innerHTML = '';


     // error message for radio field accessing 
     const errorMessagesRadio = document.getElementById('errorMessagesRadio');
     const errorMessagesRadio2 = document.getElementById('errorMessagesRadio1');
     errorMessagesRadio.innerHTML = '';
     errorMessagesRadio2.innerHTML = '';



    // access radio button info 

    const personalInfo = document.getElementById('personal');
    const companyInfo = document.getElementById('company');
    const femaleInfo = document.getElementById('femaleId');
    const maleInfo = document.getElementById('maleId');

    // radio button checked 
    if(!(personalInfo.checked) && !(companyInfo.checked)){
        errorMessagesRadio.innerHTML += 'click your role';
        // alert('check the radio'    
    }
    if(!(femaleInfo.checked) && !(maleInfo.checked)){
        errorMessagesRadio2.innerHTML += "Click your gender";

    }

    // if(companyInfo.checked){
    //     console.log('company checked');
    // }
    if(femaleInfo.checked){
        console.log('personal checked');
    }
    if(maleInfo.checked){
        console.log('male checked');
    }
    // radio button checked end

    if((userEmail === '') && (userPassword === '')){
        errorMessagesEmail.innerHTML += 'Enter your valid email';
     
        errorMessagesPass.innerHTML += 'length minimum 8 carecters'
        return;

    }

    // check valided for email 
    if(!validEmail(userEmail)){
        // return alert('add emal');
        errorMessagesEmail.innerHTML += 'Enter your valid email';
        return;
    }
     // check valided for name
     if(!validName(userName)){
        // return alert('input ur name');
        errorMessagesName.innerHTML += 'Please add minimum 3 letter';
        return;
     }

     if(!validPassword(userPassword)){
        // return alert('add password');
        errorMessagesPass.innerHTML += 'length minimum 8 carecters'
     }
     else{
        window.location.href = '../validation.html'
     }



}

//email valid function 
function validEmail(email) {
    const emailRange = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailRange.test(email);
    
}
function validName(name) {
    const minLength = 3;
     return(
        name.length >= minLength
     );
    
}

function validPassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return(
        password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber
    ); 
    
}