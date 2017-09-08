const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const app         = express();
const usersRoutes = require('./routes/users');

require('./config/mongoose');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', usersRoutes);

app.get('*', (req, res) => {
  res.send('It works!');
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log('Listening of port 3000');
});
