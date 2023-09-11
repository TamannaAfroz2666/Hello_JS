function depositAmount(){
    let depositAmount = document.getElementById('depositeAmmount').value;
    console.log('deposite amount is', depositAmount);
    let showDeposite = document.getElementById('show_deposite').innerHTML = depositAmount;
    console.log('Show deposite amount is', showDeposite);
    let showBalance = document.getElementById('show_balance').innerText = depositAmount;
    console.log('Show balance is', showBalance);
}