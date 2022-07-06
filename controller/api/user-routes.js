const router = require('express').Router();
const { User } = require('../../models');

// User route ???

router.get("/", (req, res) => {
  User.findAll({
    // attributes: { exclude: ["password"] },
  })
    .then((UserData) =>
      res.json(UserData)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/signup', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
   email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(()=>{
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json(dbUserData);

      })
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
});
});
router.post('/login', (req, res) => {
  // expects {email: 'test@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      console.log('1 No user with that email address!');
      // res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      {alert('Incorrect password!')}
      // res.status(400).json({ message: 'Incorrect password!' });
      return;
    } 

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

    res.json({ user: dbUserData, message: 'You are now logged in!' });
   
    });
    res.redirect('/homepage');
  });
});

router.post('/logout',(req,res)=> {
  if(req.session.loggedIn){
    req.session.destroy(()=>{
      res.status(204).end();
    })
  }
  else {
    res.status(404).end();
  }
})

// router.put('/:id', (req, res) => {
//   // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

//   // pass in req.body instead to only update what's passed through
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbUserData => {
//       if (!dbUserData[0]) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete('/:id', (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
