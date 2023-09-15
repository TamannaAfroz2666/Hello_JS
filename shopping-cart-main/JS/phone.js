document.getElementById('btn-phone-plus').addEventListener('click', function(){
    // console.log('hajibaji');

    const phoneNumField = document.getElementById('phone-num-field');
    const phoneNumFieldStr = phoneNumField.value;
    const priviousPhoneNum = parseInt(phoneNumFieldStr);

    // value change 

    const newPhoneNum = priviousPhoneNum + 1;
    phoneNumField.value = newPhoneNum;
})