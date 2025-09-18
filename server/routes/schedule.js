// server/routes/schedule.js
import express from "express";
import nodemailer from "nodemailer";
import Schedule from "../models/Schedule.js";

const router = express.Router();

// POST /api/schedule
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
    // ✅ Save to MongoDB
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

    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    // // ✅ Create transporter
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

    // ✅ Email to company with HTML formatting
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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Company email
      subject: "📅 New Schedule Request",
      html: companyHtml
    });

    // ✅ Confirmation to user (plain text)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Your meeting request was received",
      text: `Hi ${name},

We received your request for a ${meetingType} on ${preferredDate} at ${preferredTime} (${timeZone}).

Our team will review and confirm shortly.

- Vaigo Team`
    });

    res.status(200).json({ message: "Schedule submitted successfully" });
  } catch (error) {
    console.error("Schedule form error:", error);
    res.status(500).json({ error: "Failed to submit schedule" });
  }
});

export default router;
