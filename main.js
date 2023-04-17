const express=require("express");
const app=express();
const port =8090;

app.get("/",(req,res)=>{

    res.status(200).json({
        message:"Success"
    })
})



app.listen(port,function(){
    console.log(`Server Running on port ${port}`);
})