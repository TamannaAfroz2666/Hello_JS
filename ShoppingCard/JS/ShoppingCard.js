

// -----start ------//
function cardValueChanged(){
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

    // calculate the quantity with price 
    const headphoneQuantityPrice = priceHeadPho * headphoneValue;
    console.log('headphone quantity total price',headphoneQuantityPrice);


    // ------------  QUANTITY PASSS for headphone -----

    const quantityPass = document.getElementById('cartShowQuantity').innerText = headphoneValue;
    // ------------  QUANTITY PASSS for walton -----


     const quantityPassWal = document.getElementById('cartShowQuantity').innerText = productNumberValue;
     console.log('quantity passing walton', quantityPassWal);

     

    //  const addShowNewSumQuantity = document.getElementById('cartShowQuantity').innerText = newAddQuantity;
   
   if(headphoneValue > 0 || productNumberValue > 0){
    const newAddQuantity = quantityPassWal + quantityPass;
     console.log('total twho part sum of quantity', newAddQuantity);
     const addShowNewSumQuantity = document.getElementById('cartShowQuantity').innerText = newAddQuantity;
   }


//   -----LocalStorage ------

localStorage.setItem('waltonTitle', 'Walton WSI-INVERNA');
const num1 = localStorage.getItem('waltonTitle');
const waltonTile = document.getElementById('selectProductTitle').innerText = num1;
// console.log('localstorage is on setttt:', waltonTile);
 const quantityIs = document.getElementById('selectProductQuantity').innerText = productNumberValue;
 const withIconPriceIs = document.getElementById('withIconPrice').innerText;
 console.log('withIconPriceIs', withIconPriceIs);
 const priceTitleIs = document.getElementById('priceTitle').innerText = withIconPriceIs;
}



// for input onchange field in walton
function inputValueOnChange(){
    cardValueChanged();

}

// Main function of walton 
function addCardWalton() {
    cardValueChanged();
    // return true;

}
// for input onchange field in headphone 
function inputChangeField(){
    cardValueChanged();

}

// for  headphone function 
function addCartHeadPho() {
    cardValueChanged();
    // return true
}

// card onclick function 
function show(){
    console.log('click here');
   document.getElementById('mainPosList').style.height = "100% ";
   document.getElementById('mainPosList').style.display = "block ";
   document.getElementById('clockButton').style.display = "block";


 ;
}
function hide(){
    console.log('click here');
   document.getElementById('mainPosList').style.height = "0px ";
   document.getElementById('mainPosList').style.display = "none ";
   document.getElementById('clockButton').style.display = "inline";
}