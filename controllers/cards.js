const Card = require('../models/card');

const ERROR_INPUT = 400;
const ERROR_FORBIDDEN = 404;
const ERROR_SERVER = 500;

module.exports.getCards = (req, res) => {
  Card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then(card => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_INPUT).send({ message: 'Данные введены некорректно' })
      }
      res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' })
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .then((card) => {
      if (card) {
        res.send({ data: card })
      } else {
        res.status(ERROR_FORBIDDEN).send({ message: 'Карточка с таким id не найдена' })
      }
    })
    .catch(err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
}

module.exports.likeCard = (req, res) => {
  console.log(req.params.cardId, req.user._id);
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (card) {
        res.send({ data: card })
      } else {
        res.status(ERROR_FORBIDDEN).send({ message: 'Карточка с таким id не найдена' })
      }
    })
    .catch(err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
}

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (card) {
        res.send({ data: card })
      } else {
        res.status(ERROR_FORBIDDEN).send({ message: 'Карточка с таким id не найдена' })
      }
    })
    .catch(err => res.status(ERROR_SERVER).send({ message: 'На сервере произошла ошибка' }));
}
