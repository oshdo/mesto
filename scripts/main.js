const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');

function openPopup() {
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

const formElement = document.querySelector('.popup__container');
let nameField = document.querySelector('.profile__name');
let jobField = document.querySelector('.profile__occupation');
let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_occupation');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value
  jobField.textContent = jobInput.value
  closePopup()
}

popupOpenButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler);

