var express=require('express')
var router=express.Router()
var newscontroller=require('../controller/newscontroller')
router.post('/news/register',newscontroller.registerNews)


module.exports=router;