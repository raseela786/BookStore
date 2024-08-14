import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

import { PORT,mongoDBURL } from "./config.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());
app.use("/books",booksRoute)
mongoose.connect(mongoDBURL)
.then(()=>
{
    console.log("app connected to database")
    app.listen(PORT,()=>
    {
        console.log(`app is running in port${PORT}`);
    })
})
.catch((error)=>{
    console.log("errr"+error)
}) 