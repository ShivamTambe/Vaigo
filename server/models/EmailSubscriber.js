import mongoose from "mongoose";

const emailSubscriberSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
  },
  subscribedAt: { type: Date, default: Date.now },
  status: { type: String, default: "active", enum: ["active", "unsubscribed"] }
});

export default mongoose.model("EmailSubscriber", emailSubscriberSchema);