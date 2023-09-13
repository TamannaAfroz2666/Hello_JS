function submitInfo(){
    console.log('cleocv');
    const userEmail = document.getElementById('emailId').value;
    console.log('user emil is', userEmail);
    const userName = document.getElementById('Name').value;
    console.log('user name is', userName);
    const userPassword = document.getElementById('passwordId').value;
    console.log('user password is ', userPassword);

    // access radio button info 

    const personalInfo = document.getElementById('personal');
    // console.log('personal info for radio ', personalInfo);
    const companyInfo = document.getElementById('company');
    // console.log('company info is', companyInfo);
    const femaleInfo = document.getElementById('femaleId');
    // console.log('female info is', femaleInfo);
    const maleInfo = document.getElementById('maleId');
    // console.log('male info is', maleInfo);

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
}