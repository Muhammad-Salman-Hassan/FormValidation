//getting element form form.html
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

//functions

const showError = (input, message) => {
  //get the parent emelent from html by using parent Element
  const formControll = input.parentElement;
  //overRide the class of parent element with error class
  formControll.className = "form-control error";
  const small = formControll.querySelector("small");
  small.innerText = message;
};



//update class for success
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Email validation regex function
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

// Checking input for error and success

const checkReq = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `${checkInput(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
};

// changing to Capital input fied values
const checkInput = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
//Adding event on Button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkReq([username, email, password, confirmPassword]);
});

// if (username.value==="") {
//     showError(username,"UserName is required")
// }else{
//     showSuccess(username)
// }

// //  checking Email
// if (email.value==="") {
//     showError(email,"Email is required")
// }else if (!isValidEmail(email.value)) {
//     showError(email,"Email Not valid")
// }
// else{
//     showSuccess(email)
// }

// //  checking Password
// if (password.value==="") {
//     showError(password,"Password is required")
// }else{
//     showSuccess(password)
// }
// //  confirm Password
// if (confirmPassword.value==="") {
//     showError(confirmPassword,"Confirm your Password")
// }else{
//     showSuccess(confirmPassword)
// }
