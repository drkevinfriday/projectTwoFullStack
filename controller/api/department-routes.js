const router = require("express").Router();
const Departments = require("../../models/Departments");

// http://localhost:3001/api/departments/

// get all users
router.get("/", (req, res) => {
  Departments.findAll()
    .then(departmentData => {
      const departments = departmentData.map(department => department.get({ plain: true}));
      console.log(departments);
      res.render("departmentdir", {
        departments,
        user: req.session.username,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one department
router.get("/:id", (req, res) => {
  Departments.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbDepartmentData) => {
      if (!dbDepartmentData) {
        res.status(404).json({ message: "No Department found with this id" });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add a department
router.post("/add", (req, res) => {
  Departments.create({
    name: req.body.name,
    supervisor: req.body.supervisor,
  })
    .then((dbDepartmentData) => res.json(dbDepartmentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
