var formMain = document.getElementById('form_main');

 function checkInfo(){

     let checkBox = document.getElementById('horns');
    //  console.log('the checkbox is checkinfo:', checkBox);
    //  let firstName = document.getElementById('first_name').value;
    //  console.log('the firstName is checkinfo:', firstName);
    if (checkBox.checked == true){
        return true;  
    }
    else{
        // return alert('terms and condition appley');
        return false;
        // console.log('apply');
    }

}





function send_info() {
    // let checked;
    console.log('hello js');
    let check_data = checkInfo();
    console.log('datta is', check_data);
    if(check_data == true ){
        console.log('hghjn');

    }
    else{
        return alert('do u agrree terms and condition fillup');
    }
  
}


// function send_info() {
//     var genderList = document.getElementById('gender_list').value;
//     var initialName = document.getElementById('initials_name').value;
//     var firstName = document.getElementById('first_name').value;
//     var lastName = document.getElementById('last_name').value;
//     var customerAddress = document.getElementById('customer_add').value;
//     var customerAddress2 = document.getElementById('customer_add2').value;
//     var City = document.getElementById('city_id').value;
//     var Region = document.getElementById('region_id').value;
//     var postalCode = document.getElementById('postal_id').value;
//     var countryPicker = document.getElementById('countryPicker').value;
//     var customerNumber = document.getElementById('number_id').value;
//     var customerFax = document.getElementById('fax_id').value;
//     var calenderDate = document.getElementById('calender_id').value;
//     var emailId = document.getElementById('email_id').value;
//    
//     console.log('the gender is:', genderList);
//     console.log('the initials name is:', initialName);
//     console.log('the first name is:', firstName);
//     console.log('the last name is:', lastName);
//     console.log('Customer address is:', customerAddress);
//     console.log('Customer address is:', customerAddress2);
//     console.log('City is:', City);
//     console.log('the region is:', Region);
//     console.log('the postal code is:', postalCode);
//     console.log('thecountry piker is:', countryPicker);
//     console.log('the number  is:', customerNumber);
//     console.log('the fax is:', customerFax);
//     console.log('the calender date is:', calenderDate);
//     console.log('the email id is:', emailId);
//     
   

// }

// formMain.addEventListener('submit', (e) => {
//     e.preventDefault();
//     send_info();
// })

