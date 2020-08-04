"use strict";

// read EVERY WORD OF EVERY QUESTION //

// ***************** #1 *******************

let total = 0;

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    let amount = parseFloat(item.getAttribute("data-amount"));
    total += amount;
    let totalMoney = document.querySelector(".total-money");
    totalMoney.innerText = "Total: $" + total;
  });
});

// can use Number() method instead of parseFloat in line 11.
// use object literal instead of "" in line 14.
// 'Total: $${totalMoney}';

// ***************** #2 *******************

let coinForm = document.querySelector(".coin-form");
let coinPurse = document.querySelector(".coin-purse");

let removeCoin = (item) => {
  item.target.remove();
};

coinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = new FormData(coinForm);
  let number = parseInt(data.get("number"));
  let coin = data.get("coin");
  let cloneDiv;

  for (let i = 1; i <= number; i++) {
    cloneDiv = document.createElement("div");
    coinPurse.append(cloneDiv);
    cloneDiv.setAttribute("class", coin + " coin");
    cloneDiv.innerText = coin;
    cloneDiv.addEventListener("click", removeCoin);
  }
  coinForm.reset();
});

// added coinForm.reset() so that it can reset the form each time through
// line 42 can be changed to use .classlist method;
// cloneDiv.classlist.add(coin, "coin");

// ***************** #3 *******************

let lightBulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

const turnOn = () => {
  lightBulb.classList.add("light");
  lightBulb.classList.remove("dark");
};

const turnOff = () => {
  lightBulb.classList.add("dark");
  lightBulb.classList.remove("light");
};

const toggley = () => {
  lightBulb.classList.toggle("light");
  lightBulb.classList.toggle("dark");
};

const destroy = () => {
  lightBulb.remove();
  document.querySelectorAll(".button").forEach((item) => {
    item.classList.remove("button");
    item.disabled = true;
  });
};

onButton.addEventListener("click", turnOn);
offButton.addEventListener("click", turnOff);
toggleButton.addEventListener("click", toggley);
endButton.addEventListener("click", destroy);

// the order of the css will determine if it can be changed. the light needs to come after the dark in the css so that it can be applied on or removed.
// line 80 is added to disable the buttons