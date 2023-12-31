const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


// addEvent
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    validate();
})
const sendData = (usernameVal,sRate, count) =>{
    if(sRate === count){
        alert("Registration Successfull");
        swal("Welcome! " +usernameVal, "Registration Successful", "success");
        // location.href = `demo.html?username=${usernameVal}`;
    }
}


// for final validation

const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName("form-control");
    let count = formCon.length - 1;
    for(let i = 0; i < formCon.length; i++){
        if(formCon[i].className === "form-control success"){
            let sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        }else {
            return false;
        }
    }
}

// more email validation

const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol +2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}


// define validation function
const validate = () =>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // validate username
    if(usernameVal ===""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'username min 3 characters');
    }else {
        setSuccessMsg(username);
    }
    // validate email
    if(emailVal ===""){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email');
    }else {
        setSuccessMsg(email);
    }

    // validate phone
    if(phoneVal ===""){
        setErrorMsg(phone, 'phone cannot be blank');
    }else if(phoneVal.length !== 10){
        setErrorMsg(phone, 'not a valid number');
    }else {
        setSuccessMsg(phone);
    }

    // validate password
    if(passwordVal ===""){
        setErrorMsg(password, 'password cannot be blank');
    }else if(passwordVal.length <=5){
        setErrorMsg(password, 'minimum 6 char');
    }else {
        setSuccessMsg(password);
    }


     // validate cpassword
    if(cpasswordVal ===""){
        setErrorMsg(cpassword, 'confirm password cannot be blank');
    }else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpasswordpassword, 'password not matching');
    }else {
        setSuccessMsg(cpassword);
    }
    successMsg(usernameVal);
}


    function setErrorMsg(input,errormsgs){
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = errormsgs;
    }

    // no message is shown
    function setSuccessMsg(input){
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

