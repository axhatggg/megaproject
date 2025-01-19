import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js"
import jwt from "jsonwebtoken";

dotenv.config({});
const app=express();

app.get("/",(req,res)=>{
    return res.status(200).json({
        message: "I am coming from backend sdfd",
        success: true
    })
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

app.use("/api/v1/user",userRoute);

app.get("/api/check-auth", async (req, res) => {
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode= await jwt.verify(token,process.env.SECRET_KEY);
        console.log("check")
        if(!decode){
            return res.status(401).json({ authenticated: false, message: "Invalid or expired token" });
        };
        return res.status(200).json({ authenticated: true, userId: decode.userId });
    }catch(error){
        return res.status(401).json({ authenticated: false, message: "Invalid or expired token" });
    }
});

const PORT=process.env.PORT || 3000;

// app.use("/api/v1/user",userRoute);
// app.use("/api/v1/company",companyRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})