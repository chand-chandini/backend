//This file connects the URLs to the Controller functions. It acts like a traffic cop. We use express.Router() to create a mini-app just for users.

// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} = require("../controllers/userController");

// Notice how clean this is! Route -> Controller function
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;