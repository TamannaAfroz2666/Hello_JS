
function primaryColor(){
    console.log('hello js');
    let colorName = document.getElementById('primary').value;
    console.log('the color is :', colorName);
    let ShowCode = document.getElementById('showCode').innerHTML = colorName;
    console.log('the code is showing:', ShowCode);
}
function secondary(){
    let colorName = document.getElementById('secondary').value;
    let colorcodeShow = document.getElementById('showCodeSecondary').innerHTML = colorName;
    console.log('the color name code showing on :', colorcodeShow);
}