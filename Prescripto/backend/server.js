import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";

//app config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctors', doctorRouter);
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
  res.send("Welcome to the Prescripto API!");
})

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});