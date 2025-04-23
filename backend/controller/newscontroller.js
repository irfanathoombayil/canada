

const  News = require("../model/news")
//const jwt = require("jsonwebtoken")//import jwt

exports.registerNews = (req,res)=>{


console.log("newscontroller")




   News.findOne({newsid:req.body.newsid}).then((news)=>{
       if(news){
           return res.status(400).json({message:"news already exist"})
       }
       let newNews = News(req.body)
       newNews.save().then((newnews)=>{
           if(newnews){
               return res.status(200).json({message:"News created"})
           }
           else{
               return res.status(400).json({message:"Unable to create news..................."})
           }
       })

   })
}


