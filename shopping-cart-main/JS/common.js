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
    console.log('its common page');
     // calculate total 
     const currentPhoneTotal = getElementValueById('phone-total');
     const currentCaseTotal = getElementValueById('case-total');

     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
     setTextElement('sub-total', currentSubTotal)

    //  calculate tax (10% calculate)
    var taxAmountstr = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountstr);
  
    setTextElement('tax-amount', taxAmount)

    // calculate total 
    var totalAmount = currentSubTotal + taxAmount;
    setTextElement('final-total', totalAmount);

}