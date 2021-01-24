let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let exitButton = document.querySelector('.popup__close');

function showPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopup);
exitButton.addEventListener('click', closePopup);
