// Initialize express --
const express = require("express");

// Initalize handlebars
const exphbs = require('express-handlebars');
// Init path  so that the public folder can be used
const path = require('path');
// Initlaize routes
const routes = require("./controller");
// Seqeulize connect
const sequelize = require("./config/connection");

// setup cookie seesion code
const session = require('express-session');
const SeqeulizeStore = require('connect-session-sequelize')(session.Store)

const sess ={
    secret: 'Secret',
    cookie:{},
    resave: false,
    saveUninitialized: true,
    store: new SeqeulizeStore({
        db:sequelize
    }),
};

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


//turn on connection to db and server
sequelize.sync({force: true}).then(()=>{
  app.listen(PORT,() =>console.log('Now Listening'
  )
);
// handlebars 
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
})



