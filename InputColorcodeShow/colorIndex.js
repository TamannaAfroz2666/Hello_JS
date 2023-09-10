
function primaryColor(){
    console.log('hello js');
    let colorName = document.getElementById('primary').value;
    console.log('the color is :', colorName);
    let ShowCode = document.getElementById('showCode').innerHTML = colorName;
    console.log('the code is showing:', ShowCode);
}