import express from "express";
import EmailSubscriber from "../models/EmailSubscriber.js";

export default (brevo) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const { email } = req.body;

    if (!email || !email.trim()) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const existingSubscriber = await EmailSubscriber.findOne({ email: email.toLowerCase() });
      
      if (existingSubscriber) {
        if (existingSubscriber.status === "active") {
          return res.status(200).json({ message: "You are already subscribed" });
        } else {
          existingSubscriber.status = "active";
          existingSubscriber.subscribedAt = new Date();
          await existingSubscriber.save();
        }
      } else {
        const newSubscriber = new EmailSubscriber({ email: email.toLowerCase() });
        await newSubscriber.save();
      }

      await brevo.sendTransacEmail({
        sender: { email: process.env.FROM_EMAIL || process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email }],
        subject: "✅ Welcome to Vaigo Newsletter",
        htmlContent: `<p>Hi,</p><p>Thank you for subscribing to Vaigo's newsletter!</p><p>You'll now receive updates about our latest features and innovations.</p><p>- Vaigo Team</p>`
      });

      await brevo.sendTransacEmail({
        sender: { email: process.env.FROM_EMAIL || process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email: process.env.TO_EMAIL || process.env.EMAIL_USER }],
        subject: "📧 New Newsletter Subscriber",
        htmlContent: `<p>New subscriber: <strong>${email}</strong></p><p>Subscribed at: ${new Date().toLocaleString()}</p>`
      });

      res.status(200).json({ message: "Successfully subscribed to newsletter" });
    } catch (error) {
      console.error("❌ Subscribe error:", error);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  return router;
};