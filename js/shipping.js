document.querySelector("#btn2").addEventListener("click", address);
function address() {
  alert("your address is saved");
}
var sub = JSON.parse(localStorage.getItem("subtotal"));
var dicount = JSON.parse(localStorage.getItem("discount"));
var tot = JSON.parse(localStorage.getItem("total"));
if (tot == null) {
  document.querySelector("#sub").innerText = sub;
  document.querySelector("#to").innerText = sub + 30;
} else {
  document.querySelector("#sub").innerText = sub;
  document.querySelector("#dis").innerText = dicount;
  document.querySelector("#to").innerText = tot + 30;
}
console.log(sub, tot);
