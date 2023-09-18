
// ----start -----
function getInputValue(){
    const productNumber = document.getElementById('waltonValue');
    const  productNumberValue = productNumber.value;
    console.log('Input product number is:', productNumberValue);

    //price value get
    const priceValue = document.getElementById('priceWL').innerText;
    console.log('walton product price is:', priceValue);

    //calculate the price with product quantity


}

function addAcardWalton(){
    console.log('hee');
    getInputValue();
}