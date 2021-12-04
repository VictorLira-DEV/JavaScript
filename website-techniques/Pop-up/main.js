const modalCards = document.querySelectorAll(".modalCards");
const popUp = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", addHiddenClass);
popUp.addEventListener("click", addHiddenClass);

function removeHiddenClass() {
  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function addHiddenClass() {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < modalCards.length; i++) {
  modalCards[i].addEventListener("click", removeHiddenClass);
}
