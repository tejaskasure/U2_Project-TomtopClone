var sign = document.createElement("p");
var nam = JSON.parse(localStorage.getItem("userhome"));
var bag = "";
for (var i = 0; i < nam.length; i++) {
  if (nam[i] == "@") {
    break;
  } else {
    bag += nam[i];
  }
}
sign.innerText = bag;
document.querySelector(".signin").append(sign);
console.log(sign);

var data = JSON.parse(localStorage.getItem("dataofmain"));
var dataofcart = JSON.parse(localStorage.getItem("favorite")) || [];
var dataoffav = JSON.parse(localStorage.getItem("cart")) || [];
data.map(function (ele) {
  var image = document.createElement("img");
  image.src = ele.image_url;
  image.setAttribute("id", "boximg");
  document.querySelector("#box1").append(image);
});

document.querySelector("#name").innerText = data[0].name;
if (data[0].strikeofprice == "") {
  document.querySelector("#stprice").innerText = "None";
} else {
  document.querySelector("#stprice").innerText = data[0].strikeofprice;
}
document.querySelector("#price").innerText = data[0].price;
function addtofav() {
  alert("Added To Favorite");
  dataofcart.push(data[0]);
  localStorage.setItem("favorite", JSON.stringify(dataofcart));
}
function addtocart() {
  alert("Added To Cart");
  dataoffav.push(data[0]);
  localStorage.setItem("cart", JSON.stringify(dataoffav));
}
function addedtocart() {
  alert("Buying a product");
  dataoffav.push(data[0]);
  localStorage.setItem("cart", JSON.stringify(dataoffav));
}
