const router = require('express').Router();
const Employees = require("../../models/Employees");

// http://localhost:3001/api/employees/

router.get("/employees", (req, res) => {
  Employees.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((Employee) =>
      res.render("employeedir", {
        Employee,
      })
    ) 
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


  router.post("/addemployee", (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    Employees.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      email: req.body.email,
     
    })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;