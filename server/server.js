import "./config.js";

import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import contactRoutes from "./routes/contact.js";
import scheduleRoutes from "./routes/schedule.js";
import subscribeRoutes from "./routes/subscribe.js";
import partnershipRoutes from "./routes/partnership.js";
import SibApiV3Sdk from "sib-api-v3-sdk";


// Initialize Brevo client
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;
const brevo = new SibApiV3Sdk.TransactionalEmailsApi();

const app = express();
const allowedOrigins = [
  "http://localhost:5173",      // Development
  "http://localhost:3000",      // If you use this too
  "https://vaigo.in",           // Production
  "https://www.vaigo.in"        // With www
];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use("/api/contact", contactRoutes(brevo));
app.use("/api/schedule", scheduleRoutes(brevo));
app.use("/api/partnership", partnershipRoutes(brevo));
app.use("/api/subscribe", subscribeRoutes(brevo));


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB Error:", err));
