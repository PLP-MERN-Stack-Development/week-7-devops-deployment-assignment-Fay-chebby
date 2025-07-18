const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  createCategory,
} = require("../controllers/categoryController");
const { protect } = require("../middleware/authMiddleware");

// Public
router.get("/", getAllCategories);

// Protected
router.post("/", protect, createCategory);

module.exports = router;
