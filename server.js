const express = require("express");
const routes = require("./controller");
const sequelize = require("./config/connection");
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// handlebars 
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(routes);

// get all todos


//turn on connection to db and server
sequelize.sync({force: true}).then(()=>{
  app.listen(PORT,() =>console.log('Now Listening'))
})