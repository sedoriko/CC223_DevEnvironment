const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the Backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});