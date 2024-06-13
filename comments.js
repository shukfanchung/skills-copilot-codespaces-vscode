// Create web server
const express = require("express");
const app = express();

// Handle GET requests to /comments
app.get("/comments", (req, res) => {
  res.json([
    {
      id: 1,
