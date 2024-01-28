const popupImage = document.querySelector('#popup-image');
const popImg = popupImage.querySelector('.popup__image-element');
const popTitle = popupImage.querySelector('.popup__image-title');

const configPopupValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__error_active'
};

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-btn');
const profileAddButton = profile.querySelector('.profile__add-btn');
const popupProfile = document.querySelector('#popup-profile');
const popupProfileName = popupProfile.querySelector('.popup__text_type_name');
const popupProfileCaption = popupProfile.querySelector('.popup__text_type_caption');
const profileName = profile.querySelector('.profile__name');
const profileCaption = profile.querySelector('.profile__caption');
const profileAvatar = profile.querySelector('.profile__avatar');
const popupProfileForm = document.forms["formPopupProfile"];

const profileAvatarEditButton = profile.querySelector('.profile__avatar-edit-btn');

const popupCard = document.querySelector('#popup-card');
const cardSubmitButton = popupCard.querySelector('.popup__submit-btn');
const popupCardForm = document.forms["formPopupCard"];

const popupAvatarForm = document.forms["formPopupAvatar"];

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {popupImage, popImg, popTitle, initialCards, configPopupValidation, profile, profileEditButton, profileAddButton,
  popupProfile, popupProfileName, popupProfileCaption, profileName, profileCaption, popupProfileForm, 
  popupCard, cardSubmitButton, popupCardForm, profileAvatar, profileAvatarEditButton, popupAvatarForm};