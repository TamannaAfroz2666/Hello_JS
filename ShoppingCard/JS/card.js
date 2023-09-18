
// ----start -----
function getInputValue(){
  const priviousFunc = inputValue();
    //price value get
    const priceValueStr = document.getElementById('priceWL').innerText;
    const priceValue = parseFloat(priceValueStr);
    console.log('walton product price is:', priceValue);

    //calculate the price with product quantity
    const totalPrice = priviousFunc * priceValue; 
    console.log('total price is:', totalPrice);

  
}

//  Walton input value get 
function inputValue(){
    const productNumber = document.getElementById('waltonValue');
    const  productNumberStr = productNumber.value;
    const productNumberValue = parseInt(productNumberStr)
    console.log('Input product number is:', productNumberValue); 

    // Quantity passing 

    const cardShow = document.getElementById('cartShowQuantity').innerText = productNumberValue;
    console.log('innerText is :', cardShow);
    return productNumberValue;

      

}

// Main function or button 
function addAcardWalton(){
    console.log('hee');
    getInputValue();
    inputValue();
}