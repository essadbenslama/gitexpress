const express = require ("express");
const dotenv= require ("dotenv");
const appRouter =require("./routes/route");
const { opentime } = require("./Middelwares/Opentime");
const path = require("path");

const app =express();
dotenv.config()

app.use(opentime)
app.use(appRouter);

app.get("/views/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","style.css"));
})
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","404.html"))

})

const port=process.env.port || 4000

app.listen(port,()=>{

    console.log(`server is running on ${port}`)
})