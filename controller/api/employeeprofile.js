const router = require("express").Router();
const Employees = require("../../models/Employees");

// http://localhost:3001/api/employeeprofile/

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    // To do: get a specific employee by ID
    res.render("employeeprofile",{
      user: req.session.username, 
      loggedIn: req.session.loggedIn
    })
  }else{
    res.redirect('/');
      return;
    };
});

router.get("/:id", (req, res) => {
  if (req.session.loggedIn) {
    Employees.findOne({
      where:{id: req.params.id}
    })
    .then((dbEmployeeData) => {
      //check if data exsists
      if (!dbEmployeeData) {
        res.status(404).json({ message: "No employee found with this id" });
        return;
      }
      const employee = dbEmployeeData.get({ plain: true });
      // res.json({employee});
      console.log(employee);
      res.render("employeeprofile",{employee});
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }else{
    res.redirect('/');
      return;
  };
});

module.exports = router;
