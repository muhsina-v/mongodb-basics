// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");



// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());

// app.use("/auth", require("./routes/authRoutes"));
// app.use("/users", require("./routes/userRoutes"));

// app.listen(5000, () => console.log("Server running on port 5000"));


//import dotenv from 'dotenv';
import Db from './config/db.js';
import user from "./model/userModel.js";

//dotenv.config();
Db()

    
const run=async()=>{
    try{
        const newuser=new user({name:"jii",age:21})
        await newuser.save()
        console.log("created",newuser);

       const up=await user.findOneAndDelete(
        {name:"ali"}
        
        
       )
       console.log('deleted',up);
    }

// const user1=new user({
//     name:'ali',
//     age:12,
// })

// user1.save()
// .then(()=>console.log('saved'))
// .catch((err)=>console.log("reeeee",err))
 
 catch(err){
    console.error("❌ Error:", err);
 }
}

run()