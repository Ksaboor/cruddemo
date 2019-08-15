//TODO Import Express
const express = require("express");
//TODO parse request to JSON to pass to DB
const bodyParser = require("body-parser");
//TODO Object Mapper
const mongoose = require("mongoose");
//TODO .ENV
require('dotenv/config');

const app = express();

//TODO Listing PORT
let PORT = 3000;

//TODO Import Routes
const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use('/todo', todoRoutes);

//TODO CONNECT TO DB HERE
mongoose.connect( process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true },
  () => {
    console.log("DB CONNECTED!");
  }
);
//TODO SERVER LISTENING
app.listen(PORT);
