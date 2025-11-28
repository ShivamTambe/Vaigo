import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import Partnership from "../models/Partnership.js";

console.log("Loaded Cloudinary ENV:", {
  cloud: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET ? "[loaded]" : "[missing]"
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer({ storage: multer.memoryStorage() });

export default (brevo) => {
  const router = express.Router();

  router.post("/", upload.array('dronePhotos', 5), async (req, res) => {
    const { 
      fullName, 
      email, 
      phone, 
      company, 
      droneModel, 
      expectedPrice, 
      quantity, 
      partnershipType, 
      message, 
      termsAccepted, 
      address, 
      lat, 
      lng, 
      drawingData 
    } = req.body;

    try {
      // Upload files to Cloudinary
      const photoUrls = [];
      
      if (req.files && req.files.length > 0) {
        for (const file of req.files) {
          const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: "vaigo/partnership" },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              }
            );
            uploadStream.end(file.buffer);
          });
          photoUrls.push(result.secure_url);
        }
      }

      // Save to MongoDB
      const newPartnership = new Partnership({ 
        fullName, 
        email, 
        phone, 
        company, 
        droneModel, 
        expectedPrice, 
        quantity, 
        partnershipType, 
        message, 
        termsAccepted,
        address,
        lat,
        lng,
        dronePhotos: photoUrls,
        drawingData
      });
      await newPartnership.save();

      const companyHtml = `
        <h2>🤝 New Partnership Inquiry</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company/Brand:</strong> ${company || 'N/A'}</p>
        <h3>Drone Information:</h3>
        <p><strong>Model/Details:</strong> ${droneModel}</p>
        <p><strong>Expected Price:</strong> ${expectedPrice}</p>
        <p><strong>Quantity Available:</strong> ${quantity}</p>
        <p><strong>Partnership Type:</strong> ${partnershipType}</p>
        
        <h3>Additional Message:</h3>
        <p>${message || 'No additional message'}</p>
        ${photoUrls.length > 0 ? `<h3>Photos:</h3>${photoUrls.map(url => `<p><a href="${url}">View Image</a></p>`).join('')}` : ''}
        ${drawingData ? `<h3>Drawn Areas:</h3><pre>${drawingData}</pre>` : ""}
      `;
      // <p><strong>Photo URL:</strong> ${photoUrls}</p>

      // Send to company
      await brevo.sendTransacEmail({
        sender: { email: process.env.FROM_EMAIL || process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email: process.env.TO_EMAIL || process.env.EMAIL_USER }],
        subject: `🤝 New Partnership Inquiry from ${fullName}`,
        htmlContent: companyHtml
      });
      console.log("✅ Company email sent with images");

      // Send confirmation to user
      await brevo.sendTransacEmail({
        sender: { email: process.env.FROM_EMAIL || process.env.EMAIL_USER, name: "Vaigo" },
        to: [{ email }],
        subject: "✅ Partnership Application Received",
        htmlContent: `<p>Hi ${fullName},</p>
                      <p>Thank you for your partnership inquiry! We've received your application and will review it carefully.</p>
                      <p>Our partnership team will contact you within 48 hours with next steps.</p>
                      <p>We look forward to exploring this opportunity together!</p>
                      <p>- Vaigo Team</p>`
      });
      console.log("✅ User confirmation email sent");

      res.status(200).json({ message: "Partnership inquiry submitted successfully", photoUrls });
    } catch (error) {
      console.error("❌ Partnership error:", error);
      res.status(500).json({ error: "Failed to submit partnership inquiry" });
    }
  });

  return router;
};