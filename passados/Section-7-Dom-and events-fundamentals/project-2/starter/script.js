'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

function addHiddenClass() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function removeHiddenClass() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', removeHiddenClass);

btnCloseModal.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    addHiddenClass();
  }
});
