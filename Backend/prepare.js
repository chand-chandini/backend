const express = require("express");
const app = express();

// 1. MIDDLEWARE
app.use(express.json()); // Tells Express to read JSON sent by the client

// 2. FAKE DATABASE (We will replace this with MongoDB later)
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// 3. ROUTES

// GET: Read all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET: Read one user by ID
app.get("/users/:id", (req, res) => {
  // req.params.id is a STRING. We use Number() to convert it to a number.
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// POST: Create a new user
app.post("/users", (req, res) => {
  const { name } = req.body; // Read the data from the request body

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  // Create the new user
  const newUser = {
    id: users.length + 1,
    name: name
  };

  // Save to fake database
  users.push(newUser);

  // Send back status 201 (Created) and the new user
  res.status(201).json(newUser);
});

// PUT: Update a user's name
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;

  // 1. Find the user in the array
  const user = users.find((u) => u.id === id);

  // 2. If user doesn't exist, stop and send 404
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // 3. If they sent a new name, update it
  if (name) {
    user.name = name;
  }

  // 4. Send back the updated user
  res.json(user);
});

// DELETE: Remove a user
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  // 1. Find the position of the user in the array
  const index = users.findIndex((u) => u.id === id);

  // 2. If index is -1, the user wasn't found
  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // 3. Remove 1 item from the array at that position
  users.splice(index, 1);

  // 4. Send success message
  res.json({ message: "User deleted" });
});

// 4. START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});




// Look at the order of server.js. It is strict:

// 1)Setup: const app = express()

// 2)Middleware: app.use(express.json()) (Must be before routes so req.body works).

// 3)Data: const users = [...]

// 4)Routes: app.get, app.post, etc. (Logic lives here).

// 5)Listen: app.listen(3000) (Always at the very bottom).