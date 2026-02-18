import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  fileUrl: String,
  content: String, // extracted PDF text
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Resource", resourceSchema);
