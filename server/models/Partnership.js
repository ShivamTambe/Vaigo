import mongoose from "mongoose";

const partnershipSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  droneModel: { type: String, required: true },
  expectedPrice: { type: String, required: true },
  quantity: { type: String, required: true },
  partnershipType: { type: String, required: true },
  message: { type: String },
  termsAccepted: { type: Boolean, default: false },
  dronePhotos: [{ type: String }],
  address: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  drawingData: { type: String }, // Store as JSON string
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Partnership", partnershipSchema);