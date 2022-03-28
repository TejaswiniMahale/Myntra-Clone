document.querySelector("#checkotp").addEventListener("click", checkUser);

var arrUserdata = JSON.parse(localStorage.getItem("userData")) || [];

function checkUser(event) {


    var otp1 = document.getElementById("otp1").value;
    var otp2 = document.getElementById("otp2").value;
    var otp3 = document.getElementById("otp3").value;
    var otp4 = document.getElementById("otp4").value;

    var flag = false

    if (otp1 == '1' && otp2 == '2' && otp3 == '3' && otp4 == '4') {
        flag = true;
    }

    if (flag == true) {
    document.location.href="index.html"
    } else {
        alert("Invalid OTP")
    }

    document.getElementById("otp1").value="";
    document.getElementById("otp2").value="";
    document.getElementById("otp3").value="";
    document.getElementById("otp4").value="";
};