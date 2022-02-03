//getting element form form.html
const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('confirm-password')


//functions 

const showError=(input,message)=>{
//get the parent emelent from html by using parent Element
const formControll=input.parentElement;
//overRide the class of parent element with error class 
formControll.className="form-control error"
const small=formControll.querySelector('small')
small.innerText=message
}
//update class for success


//Adding event on Button
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    
    if (username.value==="") {
        showError(username,"UserName is required")
    }
})
