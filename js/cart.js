// localStorage.setItem("cart",JSON.stringify(cart))

let cartData = JSON.parse(localStorage.getItem("cart"));
console.log(cartData);


document.querySelector(
  "#ware"
).innerHTML = `Ships from China Warehouse (${cartData.length} items)`;

document.querySelector("#warehouse").addEventListener("click", checkbox);
let count = 0;

function checkbox() {
  let check = document.querySelector("#warehouse").value;
  // console.log(check)
  if (check == "checked") {
    let arr = Array.from(document.querySelectorAll("#td5")).map(
      (x) => +x.innerText
    );
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    console.log(sum);
    var x = localStorage.setItem("subtotal", JSON.stringify(sum));
    console.log(x);

    count++;
    document.querySelector("#ware").style.color = "#ffad33";
    document.querySelector("#sum-price").innerText = sum;
    document.querySelector("#subtotal").innerText = sum;
  }

  if (count > 1) {
    count = 0;
    
    document.querySelector("#subtotal").innerText = 0.0;
    document.querySelector("#sum-price").innerText = 0.0;
  }
}

//promo code starts
let promo = "masai30";
localStorage.setItem("PROMO CODE", JSON.stringify(promo));

document.querySelector("#button").addEventListener("click", discount);

function discount() {
 
  let promocode = document.querySelector("#pro").value;

  let array = Array.from(document.querySelectorAll("#td5")).map(
    (x) => +x.innerText
  );
  let sum = 0;
  for (let elem of array) {
    sum += elem;
  }

  if (promocode == JSON.parse(localStorage.getItem("PROMO CODE"))) {
    document.querySelector("#dis").innerText = (sum * 30) / 100;
    let discount_price = document.querySelector("#sum-price");
    discount_price.innerText = sum - (sum * 30) / 100;
   
    var y = localStorage.setItem(
      "total",
      JSON.stringify(+discount_price.innerText)
    );
    var z = localStorage.setItem("discount", JSON.stringify(+(sum * 30) / 100));
    
  }
}


cartData.map(function (elem, index) {
  let tr = document.createElement("tr");

  let img = document.createElement("img");
  img.setAttribute("id", "image");
  img.src = elem.image_url;

  let tra = document.createElement("tr");
  tra.innerText = elem.name;
  let btn = document.createElement("button");
  btn.setAttribute("id", "removebtn");
  btn.style =
    "cursor:pointer;width:80px;height:25px;box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;border:none";
  btn.innerText = "Remove";
  btn.addEventListener("click", function () {
    removeItem(elem, index);
  });
  function removeItem() {
    cartData.splice(index, 1);
    
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
  }

  let td2 = document.createElement("td");
  td2.append(tra, btn);
 

  let tr1 = document.createElement("tr");
  tr1.innerText = elem.price;
  let tr2 = document.createElement("tr");
  tr2.innerText = elem.strikeofprice;
  tr2.style.textDecoration = "line-through";
  tr2.style.color = "grey";

  let td3 = document.createElement("td");
  td3.append(tr1, tr2);
  td3.style.fontFamily = "Segoe UI";

  let td4 = document.createElement("td");
  td4.setAttribute("id", "td4");

  let divbtn = document.createElement("div");
  divbtn.setAttribute("id", "divbtn");

  let counter = 1;
  let btn1 = document.createElement("button");
  btn1.setAttribute("id", "btn1");
  btn1.innerText = "-";
  btn1.addEventListener("click", function () {
    dec(elem);
  });

  function dec() {
    counter--;
    h3.innerText = counter;
    if (counter >= 1) {
      h3.innerText = counter;
    } else {
      counter = 1;
      h3.innerText = counter;
    }
    td5.innerText = elem.price * counter;

    let array = Array.from(document.querySelectorAll("#td5")).map(
      (x) => +x.innerText
    );
    let sum = 0;
    for (let elem of array) {
      sum += elem;
    }

    document.querySelector("#sum-price").innerText = sum;
    document.querySelector("#subtotal").innerText = sum;
    document.querySelector("#warehouse").value = check;
  }

  let h3 = document.createElement("h3");
  h3.setAttribute("id", "h3");
  h3.innerText = counter;

  let btn2 = document.createElement("button");
  btn2.setAttribute("id", "btn2");
  btn2.innerText = "+";
  btn2.addEventListener("click", function () {
    inc(elem);
  });

  function inc() {
    
    counter++;
    if (counter > 1) {
      h3.innerText = counter;
    }
    td5.innerText = elem.price * counter;

    let array = Array.from(document.querySelectorAll("#td5")).map(
      (x) => +x.innerText
    );
    let sum = 0;
    for (let elem of array) {
      sum += elem;
    }

    document.querySelector("#sum-price").innerText = sum;
    document.querySelector("#subtotal").innerText = sum;
  }
  divbtn.append(btn1, h3, btn2);
  td4.append(divbtn);

  let td5 = document.createElement("td");
  td5.setAttribute("id", "td5");
  td5.style.fontFamily = "Segoe UI";
  td5.innerText = elem.price;

  tr.append(img, td2, td3, td4, td5);
  document.querySelector("#tbody").append(tr);
});


