// The Controller holds the logic (your req, res functions). We move all your functions here. Look closely: we import the Model at the top, and export the functions at the bottom.

// controllers/userController.js
const users = require("../models/userModel");

// GET all users
const getUsers = (req, res) => {
  res.json(users);
};

// GET one user
const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
};

// POST new user
const createUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT update user
const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const user = users.find((u) => u.id === id);
  
  if (!user) return res.status(404).json({ error: "User not found" });
  if (name) user.name = name;
  
  res.json(user);
};

// DELETE user
const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  
  if (index === -1) return res.status(404).json({ error: "User not found" });
  users.splice(index, 1);
  
  res.json({ message: "User deleted" });
};

// Export all functions together
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};