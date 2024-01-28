class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  };

  //находим информацию о дефолтных карточках через API
  getInitialCards() {
    return this._checkStatus(
      fetch(`${this._url}/cards`, {
        headers: this._headers,
        method: 'GET'
      }))
  };

  //находим информацию о юзере через API
  getUserInfo() {
    return this._checkStatus(
      fetch(`${this._url}/users/me`, {
        headers: this._headers,
        method: 'GET'
      }))
  };

  //функция для хэндлера попапа удаления карточки
  deleteCard(cardId) {
    return this._checkStatus(
      fetch(`${this._url}/cards/${cardId}`, {
        headers: this._headers,
        method: 'DELETE'
      }))
  };

  //обновление информации о пользователе на сервере 
  setUserInfo(userInfo) {
    return this._checkStatus(
      fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: userInfo.name,
          about: userInfo.about
        })
      }))
  };

  //обновление аватара профиля
  setUserAvatar(avatarUrl) {
    return this._checkStatus(
      fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatarUrl
        })
      }))
  };

  //добавление новой карточки на сервер
  addNewCard({ name, link}) {
    return this._checkStatus(
      fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }))
  };

  //проверка статуса

  _checkStatus(promiseResult) {
    return promiseResult.then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  };

  //постановка лайка на карточке 
  
  addLike(cardId) {
    return this._checkStatus(
      fetch(`${this._url}/cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'PUT'
      }))
  }

  //удаление лайка на карточке

  deleteLike(cardId) {
    return this._checkStatus(
      fetch(`${this._url}/cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'DELETE'
      }))
  }

  //toggle лайка на карточке

  changeLikeCardStatus(cardId, isNotLiked) {
    if (isNotLiked) {
      return this.addLike(cardId);
    } else {
      return this.deleteLike(cardId);
    }
  }
}


//создание элемента класса API для подключения страницы к серверу

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: 'cd6216f4-847a-4421-99d4-0436178223c8',
    'Content-Type': 'application/json'
  }
});

export default api;