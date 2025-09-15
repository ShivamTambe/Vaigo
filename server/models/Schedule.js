import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  phone: { type: String, required: true },
  jobTitle: { type: String },
  farmSize: { type: String },
  meetingType: { type: String, required: true },
  callPurpose: { type: String, required: true },
  preferredDate: { type: Date, required: true },
  preferredTime: { type: String, required: true },
  duration: { type: String, required: true },
  timeZone: { type: String, default: "UTC+5:30 (IST - India Standard Time)" },
  currentChallenges: { type: String },
  additionalNotes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Schedule", scheduleSchema);