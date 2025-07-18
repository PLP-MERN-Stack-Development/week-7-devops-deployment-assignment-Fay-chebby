const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("category")
    .populate("author", "username");
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("category")
    .populate("author", "username");
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
};

exports.createPost = async (req, res) => {
  const { title, content, category } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  const post = new Post({
    title,
    content,
    image,
    category,
    author: req.user._id,
  });

  await post.save();
  res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: "Not authorized" });
  }

  const image = req.file ? `/uploads/${req.file.filename}` : post.image;

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.image = image;
  post.category = req.body.category || post.category;

  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  if (post.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: "Not authorized" });
  }

  await post.deleteOne();
  res.json({ message: "Post deleted" });
};
