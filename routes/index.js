var express = require('express');
var router = express.Router();
const Mbook=[]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render("create");
});

router.post('/create', function(req, res, next) {
Mbook.push(req.body)
  res.redirect("/read");
});

router.get('/read', function(req, res, next) {
  res.render("lib",{store :Mbook});
});

router.get('/delete/:index', function(req, res, next) {
  Mbook.splice(req.params.index,1) 
    res.redirect("/read");
  });


  router.get("/update/:index",function(req,res,next){
const a=req.params.index
const b=Mbook[a]
    res.render("update",{num:b,index:a})
  })

  router.post("/update/:index",function(req,res,next){
    const a=req.params.index
    Mbook[a]=req.body
    res.redirect("/read")
  })

  


  



module.exports = router;
