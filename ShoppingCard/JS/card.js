
// ----start -----
function getInputValue(){
    const productNumber = document.getElementById('waltonValue');
    const  productNumberStr = productNumber.value;
    const productNumberValue = parseInt(productNumberStr)
    console.log('Input product number is:', productNumberValue);

    //price value get
    const priceValueStr = document.getElementById('priceWL').innerText;
    const priceValue = parseFloat(priceValueStr);
    console.log('walton product price is:', priceValue);

    //calculate the price with product quantity
    const totalPrice = productNumberValue * priceValue; 
    console.log('total price is:', totalPrice);

    // Quantity passing 

    const cardShow = document.getElementById('cartShowQuantity').innerText = productNumberValue;
    console.log('innerText is :', cardShow);


}

function addAcardWalton(){
    console.log('hee');
    getInputValue();
   

}