
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

function updateTotalPrice(newPhoneNum){
    const totalPrice = newPhoneNum * 1219;
    const phoneTotalElement = document.getElementById('phone-total')
    phoneTotalElement.innerText = totalPrice;

}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNum =  updatePhone(true);
    updateTotalPrice(newPhoneNum)

});

document.getElementById('btn-pho-minus').addEventListener('click', function(){
    const newPhoneNum = updatePhone(false);
    updateTotalPrice(newPhoneNum)

});