

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


    // Quantity passing 

    // const cardShow = document.getElementById('cartShowQuantity').innerText = productNumberValue;
    // const cardShow = document.getElementById('cartShowQuantity');
    // const cardShowInnerStr = cardShow.innerText;
    // const cardShowInner = parseInt(cardShowInnerStr);



    // calculate the input value and card value 
    const newSumValue = productNumberValue;
    console.log("new sum value = ", newSumValue)


    cardShowInnerTest1 = newSumValue;
    document.getElementById('cartShowQuantity').innerText = cardShowInnerTest1;

    //access price field
    const priceValueStr = document.getElementById('priceWL').innerText;
    const priceValue = parseFloat(priceValueStr);


    // calculate total price 

    const totalPrice = productNumberValue * priceValue;
    console.log('total price is:', totalPrice);

    return productNumberValue;



}

//headphone onchange field
function inputChangeField() {

    const headphoneValueStr = document.getElementById('headPhoValue').value;
    const headphoneValue = parseInt(headphoneValueStr);
    console.log('headphone input value is', headphoneValue);

    // QUANTITY PASSS
    // const quantityPass = document.getElementById('cartShowQuantity').innerText = headphoneValue;





    // calculate the input value and card value 
    const newSumValue1 = headphoneValue ;
    // cardShow.innerText = newSumValue1;

    cardShowInnerTest1 = cardShowInnerTest1
    document.getElementById('cartShowQuantity').innerText = cardShowInnerTest1;

    // return quantityPass;
}


// Main function or button 
function addAcardWalton() {
    // console.log('hee');
    getInputValue();

}


// for  headphone function 
function addCartHeadPho() {
    // console.log('headphone is here');
    getInputValue();
    // inputChangeField();
}

