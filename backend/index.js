const express=require('express')
   require('dotenv').config()
  require('./db/connection')

var router=require('./router/router')
const cors=require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
 require('dotenv').config()
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
 app.use(router)
const PORT=3001

app.get('/',(req,res)=>{
    res.send("server created in 3000")
    
})
app.listen(PORT,()=>{
    console.log(`app is running in port ${PORT}`);
    
})
