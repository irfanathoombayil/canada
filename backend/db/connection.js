const mongoose=require('mongoose')// import mongoose
const connectionString=process.env.DATABASE// load database in the env file into the variable connection string
mongoose.connect(connectionString).then((res)=>//connect mongoose and connectionsting
{
    console.log("mongodb connection successfully");
    
})                                     // check connectivity success
.catch((err)=>
{
    console.log("mongodb connection failed");
    console.log((err));
    
    
})