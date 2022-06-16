var yourdata = JSON.parse(localStorage.getItem("userdatastorage"));
console.log(yourdata);
document.querySelector("form").addEventListener("submit", myfunction);
function myfunction() {
  event.preventDefault();
  var enteremail = document.querySelector("#emailid").value;
  var enterpassword = document.querySelector("#password").value;
  console.log(enteremail, enterpassword);
  var sum = 0;
  for (var i = 0; i < yourdata.length; i++) {
    console.log(yourdata[i]);
    if (
      enteremail == yourdata[i].email &&
      enterpassword == yourdata[i].password
    ) {
      console.log("login Success");
      sum++;
    } else {
      continue;
    }
  }
  if (sum <= 0) {
    alert("Login failed ! Please enter valid email and password");
  } else if (enteremail == "" && enterpassword == "") {
    alert("unvalid");
  } else {
    alert("Login Successful ! Welcome to TomTop");
    window.location.href = "homepagefinal.html";
    localStorage.setItem("userhome", JSON.stringify(enteremail));
  }
}
