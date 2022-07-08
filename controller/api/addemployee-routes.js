const router = require("express").Router();
const Employees = require("../../models/Employees");

// http://localhost:3001/api/addemployee

router.get("/", (req, res) => {
  res.render("addemployee",{
    user: req.session.username, 
    loggedIn: req.session.loggedIn});
});

router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Employees.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
