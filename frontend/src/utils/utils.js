// функция закрытия формы
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
  popupElement.removeEventListener('click', closeByOverlayClick);
}

//добавление слушателя на esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//добавления слушателя на оверлей
function closeByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

// функция открытия формы
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.addEventListener('click', closeByOverlayClick);
  document.addEventListener('keydown', closeByEscape);
}

export {openPopup, closeByEscape, closeByOverlayClick, closePopup};