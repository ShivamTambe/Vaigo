// server/utils/email.js
import nodemailer from "nodemailer";

console.log("EMAIL_USER: in email :", process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export default transporter;
