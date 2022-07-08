var express = require('express');
var fs =require('fs');
var router = express.Router();
var path=require('path')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/submit.form",function(req,res){
  var sendername=req.body.sendername;
  var message=req.body.message;
  var details = `sent by : ${sendername}
  Message: ${message}`;
  fs.appendFile(path.join(__dirname,"../abcc.txt"),details,function (err){
    if (err) {
      console.log(err)
      return

    }

  })
  res.render ('submitted');
})


module.exports = router;
