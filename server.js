const express = require("express");
const routes = require("./controller");
const sequelize = require("./config/connection");
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session')
const SeqeulizeStore = require('connect-session-sequelize')(session.Store)

const sess ={
    secret: 'Super secret secret',
    cookie:{},
    resave: false,
    saveUninitialized: true,
    store: new SeqeulizeStore({
        db:sequelize
    })
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// handlebars 
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

//turn on connection to db and server
sequelize.sync({force: true}).then(()=>{
  app.listen(PORT,() =>console.log('Now Listening'))
})