import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'

import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/userRoute.js";

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//app config
const app= express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();
//api endpoint
app.use("/api/food",foodRouter)
app.use("/images", express.static(path.join(__dirname, "uploads")));
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on https://localhost:${port}`)
})

//mongodb+srv://abhiraminair301204:<db_password>@cluster0.abst5.mongodb.net/?