const router = require("express").Router();

// HOMEPAGE ROUTE

router.get("/", (req, res) => {
  res.render("login");
});

router.get('/', (req,res)=>{
  if (req.session.loggedIn){
    res.redirect('homepage');
    return
  }
  res.render('homepage')
})

router.get('/homepage', (req,res)=>{
res.render("homepage")
})

router.get("/signUp", (req, res) => {

  console.log('signup fired')
  res.render("signup");
});
//if you add this then the page will generate without the api in it
// router.get('/employees', (req,res)=>{
//   res.render("employeedir")
// })

module.exports = router;
