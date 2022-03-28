



document.querySelector("#login").addEventListener("click", checkUser);

var arrUserdata = JSON.parse(localStorage.getItem("userData")) || [];
function checkUser(event) {


   var Mobile = document.getElementById("mobile").value;

    var flag= false
    for (var i = 0; i < arrUserdata.length; i++) {
      if (arrUserdata[i].mobile == Mobile ) 
      {
        flag=true;
      }
    }
      if(flag==true)
      {
        window.location.href = "otp.html";
      }
      else{
        window.location.href = "signup.html";
      }
      document.querySelector("#mobile").value="";
};