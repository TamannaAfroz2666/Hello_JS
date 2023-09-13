function submitInfo(){
 
    const userEmail = document.getElementById('emailId').value;
    console.log('user emil is', userEmail);
    const userName = document.getElementById('Name').value;
    console.log('user name is', userName);
    const userPassword = document.getElementById('passwordId').value;
    console.log('user password is ', userPassword);

    // error message for input field accessing 

    const errorMessages = document.getElementById('errorMessages');
    const errorMessages1 = document.getElementById('errorMessages1');
    const errorMessages12 = document.getElementById('errorMessages2');

    // access radio button info 

    const personalInfo = document.getElementById('personal');
    const companyInfo = document.getElementById('company');
    const femaleInfo = document.getElementById('femaleId');
    const maleInfo = document.getElementById('maleId');

    // radio button checked 
    if(!(personalInfo.checked)){
        
        alert('check the radio')
    }
    if(companyInfo.checked){
        console.log('company checked');
    }
    if(femaleInfo.checked){
        console.log('personal checked');
    }
    if(maleInfo.checked){
        console.log('male checked');
    }
    // radio button checked end

    // check valided for email 
    if(!validEmail(userEmail)){
        return alert('add emal');
    }
     // check valided for name
     if(!validName(userName)){
        return alert('input ur name');
     }

     if(!validPassword(userPassword)){
        return alert('add password');
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