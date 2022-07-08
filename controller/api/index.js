const router = require('express').Router();

const departmentRoutes = require('./department-routes');
const employeeRoutes = require('./employee-routes');
const salaryRoutes = require('./salary-routes');
const userRoutes = require('./user-routes');
const addemployeeroutes = require("./addemployee-routes");
const employeeprofileroutes = require("./employeeprofile");

router.use('/departments', departmentRoutes);
router.use('/employees', employeeRoutes);
router.use('/salaries', salaryRoutes);
router.use('/users', userRoutes);
router.use('/addemployee', addemployeeroutes);
router.use('/employeeprofile', employeeprofileroutes);

module.exports = router;