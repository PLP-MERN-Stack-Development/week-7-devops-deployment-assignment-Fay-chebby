const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload ");

// Public
router.get("/", getAllPosts);
router.get("/:id", getPostById);

// Protected
router.post("/", protect, upload.single("image"), createPost);
router.put("/:id", protect, upload.single("image"), updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;
