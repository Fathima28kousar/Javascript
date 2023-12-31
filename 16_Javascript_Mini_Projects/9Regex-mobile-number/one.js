function validation(){
    let userNumber = document.getElementById("usernumbercheck").value;
    let mobilePattern = /^[6789][0-9]{9}$/;
    if (mobilePattern.test(userNumber)){
        document.getElementById("usernumbercheck").style.backgroundColor = "green";
    }else{
        document.getElementById("usernumbercheck").style.backgroundColor = "red";
    }
}