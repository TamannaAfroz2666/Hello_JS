

function depositAmount(){

    let depositAmount = document.getElementById('depositeAmmount').value;
    console.log('deposite amount is', depositAmount);
    // Add string to integer value 
    const newDepositAmount = parseFloat(depositAmount);  
    console.log('Amount will be string to int', newDepositAmount);
    //show deposit
    let depositTotalElement = document.getElementById('show_deposite');
    const priviousDepositTotalString =depositTotalElement.innerText;
    const priviousDepositTotal =parseFloat(priviousDepositTotalString);
    console.log('priviois amount is', priviousDepositTotal);
    
    // set the empaty string when click the button to get the vlue 
    depositeAmmount.value = '';

    //total deposit calculate

    const newDepositTotal = priviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

      //show balance
   
}