import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";
import Resource from "../models/Resource.js";
import fs from "fs";

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Upload PDF
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);

    const newResource = new Resource({
      title: req.body.title,
      description: req.body.description,
      fileUrl: `/uploads/${req.file.filename}`,
      content: pdfData.text
    });

    await newResource.save();

    res.json({ message: "PDF uploaded successfully", resource: newResource });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search resources
router.get("/search", async (req, res) => {
  const query = req.query.q;

  const results = await Resource.find({
    content: { $regex: query, $options: "i" }
  });

  res.json(results);
});

export default router;
