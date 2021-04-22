const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose.connect('mongodb://localhost:27017/time_cafe', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

const users = require("./users.js");
app.use("/api/users", users.routes);

const photos = require("./photos.js");
app.use("/api/photos", photos.routes);

const adoptions = require("./adoptions.js");
app.use("/api/adoptions", adoptions.routes);

app.listen(3001, () => console.log('Server listening on port 3001!'));