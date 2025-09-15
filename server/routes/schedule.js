// server/routes/schedule.js
import express from "express";
import Schedule from "../models/Schedule.js";  // your Schedule model

import nodemailer from "nodemailer";




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
    // ✅ Validate required fields
    // if (!name || !email || !phone || !meetingType || !callPurpose || !preferredDate || !preferredTime || !duration) {
    //   return res.status(400).json({ error: "Missing required fields" });
    // }

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
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // ✅ Notify your company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // company email
      subject: "📅 New Schedule Request",
      text: `
New schedule request:

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "N/A"}
Job Title: ${jobTitle || "N/A"}
Farm Size: ${farmSize || "N/A"}

Meeting Type: ${meetingType}
Call Purpose: ${callPurpose}
Date: ${preferredDate}
Time: ${preferredTime}
Duration: ${duration}
Time Zone: ${timeZone}

Challenges: ${currentChallenges || "N/A"}
Notes: ${additionalNotes || "N/A"}
      `
    });

    // ✅ Confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "✅ Your meeting request was received",
      text: `Hi ${name},\n\nWe received your request for a ${meetingType} on ${preferredDate} at ${preferredTime} (${timeZone}).\n\nOur team will review and confirm shortly.\n\n- Vaigo Team`
    });

    res.status(200).json({ message: "Schedule submitted successfully" });
  } catch (error) {
    console.error("Schedule form error:", error);
    res.status(500).json({ error: "Failed to submit schedule" });
  }
});

export default router;
