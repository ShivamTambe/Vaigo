import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, inquiry, message } = req.body;

  try {
    // ✅ Check if email credentials exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing Gmail credentials in .env");
      return res.status(500).json({ error: "Server email configuration missing" });
    }

    // ✅ Create transporter only when needed
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true if using 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter.verify((error) => {
      if (error) {
        console.error("❌ SMTP connection failed:", error);
      } else {
        console.log("✅ SMTP ready to send emails");
      }
    });
    // Save to DB
    const newContact = new Contact({ name, email, inquiry, message });
    await newContact.save();

    // Email to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // fallback if TO_EMAIL not set
      subject: "📩 New Contact Form Submission",
      text: `New inquiry:\n\nName: ${name}\nEmail: ${email}\nType: ${inquiry}\nMessage: ${message}`
    });

    // Confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ We received your inquiry",
      text: `Hi ${name},\n\nThanks for reaching out! We'll get back to you soon.\n\n- Vaigo Team`
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Contact form error:", error.message);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

export default router;
