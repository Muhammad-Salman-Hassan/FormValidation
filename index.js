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


const checkLength=(input,min,max)=>{
if (input.value.length<3) {
    showError(input,`${checkInput(input)} is required min ${min} character`)
}else if (input.value.length>=15){
    showError(input,"Min 3 char and max 15 char allowed")
}else{
    showSuccess(input)
}
}

const checkEmail=(input)=>{
    if (!isValidEmail(input.value)) {
        showError(input,"Email is Not valid")
    }

}

const checkConfirmPassword=(input1,input2)=>{
    if (input1.value===input2.value) {
        showSuccess(confirmPassword)
    }else{
        showError(confirmPassword,"Password Not Match")
    }
}

// changing to Capital input fied values
const checkInput = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
//Adding event on Button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkReq([username, email, password, confirmPassword]);
  checkLength(username,3,15)
  checkLength(password,6,15)
  checkConfirmPassword(password,confirmPassword)
  checkEmail(email)
  
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
