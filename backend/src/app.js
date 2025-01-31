const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { sequelize } = require('./models');
const { register } = require('./controllers/userController');
require('dotenv').config();
const db = require('./config/db')

const app = express();

db.authenticate()
  .catch(error => console.error(error))

app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
}).catch(err => console.log('База данных не синхонизирована:', err));