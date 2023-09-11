

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

      //show balance value access 
      const showBalance = document.getElementById('show_balance');
      const showBalanceString = showBalance.innerText;
      const showBalanceValue = parseFloat(showBalanceString);
      console.log('the accurate balance is:', showBalanceValue);

    //   add to the deposit balance 

    const totalBalance = showBalanceValue + newDepositAmount;
    showBalance.innerText = totalBalance;

   
}

function withdrawAmount() {
    console.log('hello ammount');

    // access input field 
    const withdrawAmount = document.getElementById('withdrawAmmount').value;
    const withdrawValue = parseFloat(withdrawAmount);
    console.log('Withdraw ammount on integer :', withdrawValue);

        // input feild empty when the value geted 
    withdrawAmmount.value = '' ;

    // acces the withdraw field 

    const showWithdraw = document.getElementById('show_withdraw');
    const showWithrawInt = showWithdraw.innerText;
    const showWithdrawValue = parseFloat(showWithrawInt);
    console.log('show tje accurate withdraw money', showWithdrawValue);


    const TotalWithdraw = showWithdrawValue + withdrawValue;
    showWithdraw.innerText = TotalWithdraw;


}