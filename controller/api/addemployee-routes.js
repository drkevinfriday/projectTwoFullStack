const router = require("express").Router();
const Employees = require("../../models/Employees");

// http://localhost:3001/api/addemployee

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.render("addemployee",{
      user: req.session.username, 
      loggedIn: req.session.loggedIn});
  }else{
    res.redirect('/');
      return;
  };
});

router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Employees.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNum: req.body.phoneNum,
    employeeID: req.body.employeeID,
    role: req.body.role,
    department: req.body.department,
    managerFirst: req.body.managerFirst,
    managerLast: req.body.managerLast,
    salary: req.body.salary,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
