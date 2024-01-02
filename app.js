const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { ERROR_FORBIDDEN } = require('./utils/constants');

const { PORT = 3000 } = process.env;

const app = express();

// подключаемся к серверу mongo
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '658d94e1f6596cf44a652bab',
  };

  next();
});

app.use('/users', require('./routes/users'));

app.use('/cards', require('./routes/cards'));

app.use((req, res, next) => next(res.status(ERROR_FORBIDDEN).send({ message: 'Страницы по данному URL не существует' })));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
