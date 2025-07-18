const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;

  const existing = await Category.findOne({ name });
  if (existing)
    return res.status(400).json({ error: "Category already exists" });

  const category = new Category({ name });
  await category.save();

  res.status(201).json(category);
};
