//total calculations function
function getElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentTotalStr = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentTotalStr);
    return currentPhoneTotal;
}

function subTotal(){
     // calculate total 
     const currentPhoneTotal = getElementValueById('phone-total');
     const currentCaseTotal = getElementValueById('case-total');
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
     const subTotalElement = document.getElementById('sub-total');
     // value set 
     subTotalElement.innerText = currentSubTotal;

}