import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import bookingRoutes from "./routes/bookingRoute.js";
import serviceRoutes from "./routes/serviceRoute.js";

dotenv.config();

connectDB();

const app = express();

// Parse JSON FIRST
app.use(cors({}));
app.use(express.json());


//Routes
app.use("/api/auth", authRoutes);
 
app.use("/api/bookings", bookingRoutes);

app.use("/api/services", serviceRoutes);

app.get("/", (req, res) => {
    res.json("API is running...");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});