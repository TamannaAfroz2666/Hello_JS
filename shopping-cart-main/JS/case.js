
function updateCaseNumber(increase) {

    console.log('click');
    const caseNumberField = document.getElementById('case-num-field');
    const caseNumStr = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumStr);
    console.log('the integer number is:', priviousCaseNumber);

    //increse the value of input
    // const newCaseNumber = priviousCaseNumber +1;
    // caseNumberField.value = newCaseNumber;
    let newCaseNumber;
    if(increase === true){
        newCaseNumber = priviousCaseNumber +1;

    }
    else{
        newCaseNumber = priviousCaseNumber - 1;
    }
    caseNumberField.value =newCaseNumber;
    // set priceing 
    return newCaseNumber;
    
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    const totalPriceIncrese = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = totalPriceIncrese;
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})