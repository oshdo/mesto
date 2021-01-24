const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__edit-button')
const popupCloseButton = document.querySelector('.popup__close')
let nameField = document.querySelector('.profile__name')
let jobField = document.querySelector('.profile__occupation')
let nameInput = document.querySelector('.popup__input_text_name')
let jobInput = document.querySelector('.popup__input_text_occupation')

function openPopup() {
  popup.classList.add('popup_opened')
  nameInput.value = nameField.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()
  jobInput.value = jobField.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value
  jobField.textContent = jobInput.value
  popup.classList.remove('popup_opened')
}

popupOpenButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
popup.addEventListener('submit', formSubmitHandler)

