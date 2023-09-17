//total calculations function
function getElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentTotalStr = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentTotalStr);
    return currentPhoneTotal;
}

function setTextElement(elementId, value){
    const subTotalElement = document.getElementById(elementId);
     // value set 
     subTotalElement.innerText = value;

}

function subTotal(){
     // calculate total 
     const currentPhoneTotal = getElementValueById('phone-total');
     const currentCaseTotal = getElementValueById('case-total');
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
     setTextElement('sub-total', currentSubTotal)

    //  calculate tax (10% calculate)
    const taxAmount = currentSubTotal * 0.1;
    setTextElement('tax-amount', taxAmount);

    // calculate total 

}