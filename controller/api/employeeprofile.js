const router = require("express").Router();

// http://localhost:3001/api/employeeprofile/

router.get("/", (req, res) => {
  //To do: get a specific employee by ID
  res.render("employeeprofile",{
    user: req.session.username, 
    loggedIn: req.session.loggedIn})
});

module.exports = router;
