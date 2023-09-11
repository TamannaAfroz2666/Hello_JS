

function depositAmount(){
    var addvalue = 0;

    let depositAmount = document.getElementById('depositeAmmount').value;
    console.log('deposite amount is', depositAmount);
    // Add string to integer value 
    const newDepositAmount = parseFloat(depositAmount);  
    console.log('Amount will be string to int', newDepositAmount);

    let showDeposite = document.getElementById('show_deposite').innerHTML = newDepositAmount;
    console.log('Show deposite amount is', showDeposite);
  
  
    let showBalance = document.getElementById('show_balance').innerText = newDepositAmount;
    console.log('Show balance is', showBalance);

    // set the empaty string when click the button to get the vlue 
    depositeAmmount.value = '';
   
}