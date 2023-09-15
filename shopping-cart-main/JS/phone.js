
function updatePhone(increase) {

    
    const phoneNumField = document.getElementById('phone-num-field');
    const phoneNumFieldStr = phoneNumField.value;
    const priviousPhoneNum = parseInt(phoneNumFieldStr);

    // value change 

    let newPhoneNum ;

    if(increase === true){
       newPhoneNum = priviousPhoneNum + 1;

    }
    else{
        newPhoneNum = priviousPhoneNum - 1; 
    }
    
    phoneNumField.value = newPhoneNum;
    return newPhoneNum;

    
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    updatePhone();

})