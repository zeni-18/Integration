
const ProductRoute = require("./routes/ProductRoute");
const cors=require("cors");


const express=require("express");
const app=express();
const dotenv=require("dotenv");
const connectDB=require("./config/db.js");
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api", ProductRoute);

const PORT=process.env.PORT;





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})