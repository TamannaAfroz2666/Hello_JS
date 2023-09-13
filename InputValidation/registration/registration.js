function submitInfo(){
 
    const userEmail = document.getElementById('emailId').value;
    console.log('user emil is', userEmail);
    const userName = document.getElementById('Name').value;
    console.log('user name is', userName);
    const userPassword = document.getElementById('passwordId').value;
    console.log('user password is ', userPassword);

    // access radio button info 

    const personalInfo = document.getElementById('personal');
    const companyInfo = document.getElementById('company');
    const femaleInfo = document.getElementById('femaleId');
    const maleInfo = document.getElementById('maleId');

    // radio button checked 
    if(personalInfo.checked){
        console.log('personal checked');
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