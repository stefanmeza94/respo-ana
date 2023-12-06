// Function 1

// burger btn drop-down menu
const burgerTablet = document.querySelector("#burger");
const itemsMenu = document.querySelector(".items-menu");

// show menu on burger button click
burgerTablet.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    e.preventDefault();
    e.stopPropagation();

    itemsMenu.classList.toggle("open");
    document.querySelector("body").style.background = "rgba(43, 43, 43, .6)";
}

 // hide menu on body click
document.querySelector("body").addEventListener("click", function() {
    itemsMenu.classList.remove("open");
});

itemsMenu.addEventListener("click", function(e){
    e.stopPropagation();
});

document.addEventListener("keydown", function(e){
    if(e.code === "Escape") {
        itemsMenu.classList.remove("open");
    }
});

// Function 2
// add to cart btns
const orangeBtn = document.querySelector("#orangeBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const addBtn = document.querySelector("#addBtn");
const priceTotal = document.querySelector("#price");

const amount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 2999;

function addToCart(e) {
    addBtn.addEventListener("click", function() {
        for (let i= 1; i<amount.length; i++) {
        sum *= amount[i];

       priceTotal.innerText = e.target.value; 
    }
    });
}
