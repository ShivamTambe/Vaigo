// server/routes/contact.js
import express from "express";
import Contact from "../models/Contact.js";

export default (brevo) => {
  const router = express.Router();

  // POST /api/contact
  router.post("/", async (req, res) => {
    const { name, email, inquiry, message } = req.body;

    try {
      // Save to MongoDB
      const newContact = new Contact({ name, email, inquiry, message });
      await newContact.save();

      // ✅ Email to company
      const companyHtml = `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

      await brevo.sendTransacEmail({
        sender: { email: process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email: process.env.EMAIL_USER }],
        subject: "📩 New Contact Form Submission",
        htmlContent: companyHtml
      });

      // ✅ Confirmation to user
      await brevo.sendTransacEmail({
        sender: { email: process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email }],
        subject: "✅ We received your inquiry",
        htmlContent: `<p>Hi ${name},</p>
                      <p>Thanks for reaching out! We'll get back to you soon.</p>
                      <p>- Vaigo Team</p>`
      });

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("❌ Contact form error:", error);
      res.status(500).json({ error: "Failed to submit form" });
    }
  });

  return router;
};
