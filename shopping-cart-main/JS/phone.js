
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


//total calculations function
function getElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentTotalStr = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentTotalStr);
    return currentPhoneTotal;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNum =  updatePhone(true);
    updateTotalPrice(newPhoneNum);

    // calculate total 
    // const currentPhoneTotal = document.getElementById('phone-total');
    // const currentCaseTotal = document.getElementById('case-total');
    const currentPhoneTotal = getElementValueById('phone-total')
    const currentCaseTotal = getElementValueById('case-total')
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    // value set 
    subTotalElement.innerText = currentSubTotal;


});

document.getElementById('btn-pho-minus').addEventListener('click', function(){
    const newPhoneNum = updatePhone(false);
    updateTotalPrice(newPhoneNum)

});