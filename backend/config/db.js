import mongoose from "mongoose"
export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://abhiraminair301204:abhirami301204@cluster0.abst5.mongodb.net/Nomera').then(()=>console.log("DB Connected"))
}