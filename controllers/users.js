// 400 — переданы некорректные данные в методы создания карточки, пользователя, обновления аватара пользователя или профиля;
// 404 — карточка или пользователь не найден.
// 500 — ошибка по-умолчанию.

const User = require('../models/user');

const ERROR_INPUT = 400;
const ERROR_FORBIDDEN = 404;
const ERROR_SERVER = 500;

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send({ data: users }))
    .catch(err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
};

module.exports.getUser = (req, res) => {
  User.find({ _id: req.params.id })
    .then((user) => {
      if (user) {
        res.send({ data: user })
      } else {
        res.status(ERROR_FORBIDDEN).send({ message: 'Пользователь с таким id не найден' })
      }
    })
    .catch(err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_INPUT).send({ message: 'Данные введены некорректно' })
      };
      res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' })
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .then((user) => {
      if (user) {
        res.send({ data: user })
      } else {
        res.status(ERROR_FORBIDDEN).send({ message: 'Пользователь с таким id не найден' })
      }
    })
    .catch(err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
}

module.exports.updateAvatar = (req, res) => {
  const avatar = req.body;
  User.findByIdAndUpdate(req.user._id, avatar, { new: true })
    .then((user) => {
      if (user) {
        res.send({ data: user })
      } else {
        res.status(ERROR_FORBIDDEN).send({ message: 'Пользователь с таким id не найден' })
      }
    })
    .catch (err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
}