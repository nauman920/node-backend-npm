// index.js
require('dotenv').config();       // 1) load .env
const express = require('express'); 
const cors    = require('cors');

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());         // if you want JSON body parsing

// a simple route
app.get('/', (req, res) => {
  res.send(`🚀 Backend Listening on port ${PORT}`);
});

// start server
app.listen(PORT, () => {
  console.log(`⚡️ Express server listening on port ${PORT}`);
});
