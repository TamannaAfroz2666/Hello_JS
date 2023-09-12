// function submit_info (){
//     // e.preventDefault()
//     console.log('clicked');
//     let useremail = document.getElementById('email').value;
//     console.log('user email is :', useremail);
//     const passwordId = document.getElementById('password').value;
//     console.log('password is', passwordId);

//     const errorMessages = document.getElementById('errorMessages');

//     // value refresh when get a needed one
//     email.value = '';
//     password.value = '';

//     // check email valid or not 
//     if(!validateEmail(email.value)){
//         alert('please enter a valid email address');
//         // errorMessages.innerHTML += 'Please enter a valid email address.';
//         // return;
//     }
//    if(!validatePassword(password.value)){
//         alert ('Please enter a valid password');
//         // errorMessages.innerHTML += 'Please enter a valid password address';
//         // return;
//     }
//     else{
//         alert('login successfully');

//     }
   
// }

// //function valid emation create

// function validateEmail(email){
//     const emailRange = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRange.test(email);
// }

// function validatePassword(password){
//     const minLength = 8;
//     const upperCase =/[A-Z]/.test(password);
//     const lowerCase = /[a-z]/.test(password);
//     const hasNumber = /\d/.test(password);

//     return (
//         password.length >= minLength && upperCase && lowerCase && hasNumber
//         );

// }