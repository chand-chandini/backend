//The Model is responsible for the data. Right now, it's just an array, but later this file will talk to MongoDB. Notice how we export the array so other files can use it.

// models/userModel.js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

module.exports = users;