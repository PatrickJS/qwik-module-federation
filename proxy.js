const express = require("express");
const path = require("path");
const fs = require("fs");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = 3001; // Your chosen port
const proxyTarget = "http://localhost:3000"; // Proxy target

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist"), { fallthrough: true }));

// Rewrite rule
app.get("/assets/q-:path", (req, res, next) => {
  const newPath = `/build/q-${req.params.path}`;
  const fullPath = path.join(__dirname, "dist", newPath);

  if (fs.existsSync(fullPath)) {
    res.sendFile(fullPath);
  } else {
    next(); // Pass control to the next middleware
  }
});

// Proxy middleware
app.use(
  createProxyMiddleware(
    (pathname, req) => {
      return !req.originalUrl.startsWith("/assets/q-"); // Condition for proxying
    },
    {
      target: proxyTarget,
      changeOrigin: true,
      logLevel: "debug", // Optional logging
    }
  )
);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
