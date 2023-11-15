const express = require("express");
const path = require("path");

const app = express();
const port = 3001; // You can choose any port

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// Rewrite rule
app.get("/assets/q-:path", (req, res) => {
  // Construct the new path
  const newPath = `/build/q-${req.params.path}`;
  // Serve the file from the new path
  res.sendFile(path.join(__dirname, "dist", newPath));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
