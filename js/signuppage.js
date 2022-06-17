document.querySelector("form").addEventListener("submit", myfunction);
var userdata = JSON.parse(localStorage.getItem("userdatastorage")) || [];
function myfunction() {
  event.preventDefault();
  var userobj = {
    email: document.querySelector("#useremail").value,
    password: document.querySelector("#password").value,
    repeat: document.querySelector("#repeat").value,
  };
  var capcha = document.querySelector("#capcha").value;

  if (password.value == repeat.value && capcha.length >= 4) {
    userdata.push(userobj);
    console.log(userdata);
    localStorage.setItem("userdatastorage", JSON.stringify(userdata));
    window.location.href = "signin.html";
  } else {
    alert("Please enter password and capcha correctly!");
  }
}
password.addEventListener("textInput", passverify);
repeat.addEventListener("textInput", passwordverify);
password.addEventListener();
function validated() {
  if (password.value.length < 6) {
    passorg.style.display = "block";
    password.focus();
    return false;
  }
}
function passverify() {
  if (password.value.length >= 6) {
    passorg.style.display = "none";
    password.focus();
    return true;
    window.location.reload();
  }
}
function passwordverify() {
  if (repeat.value == password.value) {
    passerror.style.display = "block";
    return true;
  } else {
    passerror.style.display = "none";
    return false;
  }
}
