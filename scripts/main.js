let popup = document.querySelector('.popup')
let popupOpenButton = document.querySelector('.profile__edit-button')
let popupCloseButton = document.querySelector('.popup__close')
let nameField = document.querySelector('.profile__name')
let jobField = document.querySelector('.profile__occupation')
let nameInput = document.querySelector('.popup__input_text_name')
let jobInput = document.querySelector('.popup__input_text_occupation')

function openPopup() {
  popup.classList.add('popup_opened')
  nameInput.value = nameField.textContent
  jobInput.value = jobField.textContent
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameField.textContent = nameInput.value
  jobField.textContent = jobInput.value
  closePopup()
}

popupOpenButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
popup.addEventListener('submit', formSubmitHandler)

