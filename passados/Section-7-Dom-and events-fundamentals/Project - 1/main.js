"use strict";

let secretNumber = radomNumber();
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function radomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function changeBodyColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function setSecretNumberWidth(width) {
  document.querySelector(".number").style.width = width;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    changeBodyColor("#60b347");
    setSecretNumberWidth("30rem");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = radomNumber();
  displayMessage("Start guessing...");
  changeBodyColor("#222");
  setSecretNumberWidth("15rem");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
