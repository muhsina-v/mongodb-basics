import express from "express"

const app=express()

app.get('/home/:id',(req,res)=>{
    res.send(req.params.id)
})

app.listen(4000,()=>{
    console.log("working");
    
})