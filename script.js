// burger btn drop-down menu
const burgerTablet = document.querySelector("#burger");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");

// subtract and add buttons
const subtractBtn = document.getElementById("subtractBtn");
const addBtn = document.getElementById("addBtn");
let price = document.getElementById("price");
let amountValue = document.getElementById("amount");

// number format to usd
// function formatUSD(value) {
//   return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
// }

const defaultValue = 2999;
let quantity = 1;
let currentPrice = defaultValue * quantity;

// price.innerText = formatUSD(currentPrice);
price.innerText = currentPrice;
amountValue.innerText = quantity;

addBtn.addEventListener("click", function (e) {
  quantity++;
  currentPrice = defaultValue * quantity;
  price.innerText = currentPrice;
  amountValue.innerText = quantity;
});

subtractBtn.addEventListener("click", function (e) {
  if (defaultValue === currentPrice) return;

  quantity--;
  currentPrice = currentPrice - defaultValue;
  price.innerText = currentPrice;
  amountValue.innerText = quantity;
});

// show menu on burger button click
burgerTablet.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  e.preventDefault();

  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
  // document.querySelector("body").style.background = "rgba(43, 43, 43, .6)";
}

// hide menu on body click
overlay.addEventListener("click", function () {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// Function 2
// add to cart btns
// const orangeBtn = document.querySelector("#orangeBtn");
// const subtractBtn = document.querySelector("#subtractBtn");
// const addBtn = document.querySelector("#addBtn");
// const priceTotal = document.querySelector("#price");

// const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 2999;

// function addToCart(e) {
// addBtn.addEventListener("click", function (e) {
//   for (let i = 1; i < amount.length; i++) {
//     sum *= amount[i];

//     priceTotal.innerText = e.target.value;
//   }

//   console.log(sum);
// });
// }
