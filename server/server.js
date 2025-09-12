import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import contactRoutes from "./routes/contact.js"; // 👈 Use .js extension

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173" // React dev server
}));

// Routes
app.use("/api/contact", contactRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
