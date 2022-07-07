const router = require('express').Router();
const Employees = require("../../models/Employees");

// http://localhost:3001/api/employees/

router.get('/', (req, res) => {
    //refer to 14.1.6 for breakdown  
    Employees.findAll()
      .then(employeeData => {
        const employees = employeeData.map(employee => employee.get({ plain: true }));
        console.log(Employees);
          //employees has to equal to the array of employee objects
          res.render("employeedir", {employees});
        })
        .catch(err => {
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