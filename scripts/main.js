const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');

const openPopup = function() {
  popup.classList.add('popup_opened')
}

const closePopup = function() {
  popup.classList.remove('popup_opened')
}

popupOpenButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
