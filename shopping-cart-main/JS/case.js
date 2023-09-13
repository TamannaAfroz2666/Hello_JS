document.getElementById('btn-case-plus').addEventListener('click', function(){
    console.log('click');
    const caseNumberField = document.getElementById('case-num-field');
    const caseNumStr = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumStr);
    console.log('the integer number is:', priviousCaseNumber);

    //increse the value of input
    const newCaseNumber = priviousCaseNumber +1;
    caseNumberField.value = newCaseNumber;

    
 
})