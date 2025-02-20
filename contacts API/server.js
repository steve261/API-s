import express from "express";
import router from  "./routes/contact_routes.js";

 const app=express();

app.use(express.json())
app.use('/contacts', router);
app.listen(3000, ()=>{
    console.log("server is running")
})