

// -----start ------//

function cardValueChanged(){
    console.log('click');
    // -------for walton part----

    //price value get for walton
    const priceValueStr = document.getElementById('priceWL').innerText;
    const priceValue = parseFloat(priceValueStr);
    console.log('walton price is',priceValue);
    // Walton input onchange value 
    const productNumber = document.getElementById('waltonValue');
    const productNumberStr = productNumber.value;
    const productNumberValue = parseInt(productNumberStr);
    console.log('walton productNumber is', productNumberValue);

    // calculate the quantity with price 
    const productQuantityPrice = priceValue * productNumberValue;
    console.log('walton quantiyty total price is', productQuantityPrice);

       // -------for headphone part----

    //price value get for headphone
    const priceHeadPhoStr = document.getElementById('priceHd').innerText;
    const priceHeadPho = parseFloat(priceHeadPhoStr);
    console.log('the headphone price is :', priceHeadPho);
    // headphone input onchange value
    const headphoneValueStr = document.getElementById('headPhoValue').value;
    const headphoneValue = parseInt(headphoneValueStr);
    console.log('headphone input value is', headphoneValue);
    


}

// Main function or button 
function addCardWalton() {
    cardValueChanged();

}


// for  headphone function 
function addCartHeadPho() {
    cardValueChanged();
}