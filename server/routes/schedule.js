// server/routes/schedule.js
import express from "express";
import Schedule from "../models/Schedule.js";
import SibApiV3Sdk from "sib-api-v3-sdk";

export default (brevo) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const {
      name,
      email,
      company,
      phone,
      jobTitle,
      farmSize,
      meetingType,
      callPurpose,
      preferredDate,
      preferredTime,
      duration,
      timeZone,
      currentChallenges,
      additionalNotes
    } = req.body;

    try {
      // Save to MongoDB
      const newSchedule = new Schedule({
        name,
        email,
        company,
        phone,
        jobTitle,
        farmSize,
        meetingType,
        callPurpose,
        preferredDate,
        preferredTime,
        duration,
        timeZone,
        currentChallenges,
        additionalNotes
      });
      await newSchedule.save();

      // ✅ Email to company
      const companyHtml = `
        <h2>📅 New Schedule Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Job Title:</strong> ${jobTitle || "N/A"}</p>
        <p><strong>Farm Size:</strong> ${farmSize || "N/A"}</p>
        <hr>
        <p><strong>Meeting Type:</strong> ${meetingType}</p>
        <p><strong>Call Purpose:</strong> ${callPurpose}</p>
        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Time Zone:</strong> ${timeZone}</p>
        <hr>
        <p><strong>Current Challenges:</strong> ${currentChallenges || "N/A"}</p>
        <p><strong>Additional Notes:</strong> ${additionalNotes || "N/A"}</p>
      `;

      await brevo.sendTransacEmail({
        sender: { email: process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email: process.env.EMAIL_USER }],
        subject: "📅 New Schedule Request",
        htmlContent: companyHtml
      });

      // ✅ Confirmation to user
      await brevo.sendTransacEmail({
        sender: { email: process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email }],
        subject: "✅ Your meeting request was received",
        htmlContent: `<p>Hi ${name},</p>
                      <p>We received your request for a ${meetingType} on ${preferredDate} at ${preferredTime} (${timeZone}).</p>
                      <p>Our team will review and confirm shortly.</p>
                      <p>- Vaigo Team</p>`
      });

      res.status(200).json({ message: "Schedule submitted successfully" });
    } catch (error) {
      console.error("❌ Schedule form error:", error);
      res.status(500).json({ error: "Failed to submit schedule" });
    }
  });

  return router;
};
