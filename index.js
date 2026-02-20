const express = require('express');
const app = express();

app.get('/testAPI', (req, res) => {
  res.send("Backend API Working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});