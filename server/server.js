import dotenv from "dotenv";
dotenv.config({ override: true });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";

import contactRoutes from "./routes/contact.js";
import scheduleRoutes from "./routes/schedule.js";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // React dev server
  })
);

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/schedule", scheduleRoutes);

console.log("EMAIL_USER:", process.env.EMAIL_USER);


// ✅ SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error);
  } else {
    console.log("✅ SMTP ready to send emails");
  }
});


const PORT = process.env.PORT || 5000;

// ✅ Connect DB first, then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1); // Exit if DB connection fails
  });
