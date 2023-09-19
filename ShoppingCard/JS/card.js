

// ----start -----
function getInputValue() {
    const priviousFunc = inputValueOnChange();
    //price value get for walton
    const priceValueStr = document.getElementById('priceWL').innerText;
    const priceValue = parseFloat(priceValueStr);

     //price value get for headphone
    const priceHeadPhoStr = document.getElementById('priceHd').innerText;
    const priceHeadPho = parseFloat(priceHeadPhoStr);
    console.log('the headphone price is :', priceHeadPho);

    // calculate total price 
    const totalPrice = priviousFunc * priceValue;



}


//  Walton input value onChange field 
function inputValueOnChange() {
    const productNumber = document.getElementById('waltonValue');
    const productNumberStr = productNumber.value;
    const productNumberValue = parseInt(productNumberStr);
    // console.log('Input product number is:', productNumberValue);

    // Quantity passing 

    const cardShow = document.getElementById('cartShowQuantity').innerText = productNumberValue;
    // console.log('innerText is :', cardShow);

    //access price field

    const priceValueStr = document.getElementById('priceWL').innerText;
    const priceValue = parseFloat(priceValueStr);
    // console.log('walton product price is:', priceValue);

    // calculate total price 

    const totalPrice = productNumberValue * priceValue;
    console.log('total price is:', totalPrice);

    return productNumberValue;



}

//headphone onchange field
function inputChangeField(){
    const headphoneValueStr = document.getElementById('headPhoValue').value;
    const headphoneValue = parseInt(headphoneValueStr);
    console.log('headphone input value is', headphoneValue);

    // QUANTITY PASSS
    const quantityPass = document.getElementById('cartShowQuantity').innerText = headphoneValue;
    // return quantityPass;
}


// Main function or button 
function addAcardWalton() {
    // console.log('hee');
    getInputValue();
    inputValueOnChange();
}


// for  headphone function 
function addCartHeadPho(){
    // console.log('headphone is here');
    getInputValue();
    inputChangeField();
}