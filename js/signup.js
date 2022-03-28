

document.querySelector("#form").addEventListener("submit", addUser);
var form = document.querySelector("#form");
var arrUser= JSON.parse(localStorage.getItem("userData")) || [];
function addUser(event) {
    event.preventDefault();
    var userObj={
        mobile:  form.num.value,
        password: form.pass.value,
        email:  form.email.value,
        gender:form.gender.value,
        altnumber:form.numalt.value,    
    };
    arrUser.push(userObj);
    localStorage.setItem("userData",JSON.stringify(arrUser))
      document.querySelector("#email").value="";
      document.querySelector("#num").value="";
      document.querySelector("#pass").value="";
      document.querySelector("#gender").value="";
      document.querySelector("#numalt").value="";
      window.location.href = "profile.html";
}