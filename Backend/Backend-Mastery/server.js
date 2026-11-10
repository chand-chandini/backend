// Look how incredibly clean your main file is now. It only does three things: setup, middleware, and starting the server.

// server.js
const express = require("express");
const app = express();

app.use(express.json());

// Import the user routes
const userRoutes = require("./routes/userRoutes");

// Tell the app to use these routes for anything starting with /users
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// middleware
// Express has a special type of middleware to catch errors. It has 4 arguments: (err, req, res, next). Because it has 4 arguments, Express knows it is an error handler and will skip normal routes to find it.

app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(500).json({ error: "Something went wrong on the server" });
});