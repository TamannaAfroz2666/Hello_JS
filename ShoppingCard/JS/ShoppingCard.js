

// -----start ------//

function cardValueChanged(){
    console.log('click');
    // -------for walton part----

    //price value get for walton
    const priceValueStr = document.getElementById('priceWL').innerText;
    const priceValue = parseFloat(priceValueStr);
    // Walton input onchange value 
    const productNumber = document.getElementById('waltonValue');
    const productNumberStr = productNumber.value;
    const productNumberValue = parseInt(productNumberStr);

       // -------for walton part----









    //price value get for headphone
    const priceHeadPhoStr = document.getElementById('priceHd').innerText;
    const priceHeadPho = parseFloat(priceHeadPhoStr);
    console.log('the headphone price is :', priceHeadPho);


}

// Main function or button 
function addCardWalton() {
    cardValueChanged();

}


// for  headphone function 
function addCartHeadPho() {
    cardValueChanged();
}