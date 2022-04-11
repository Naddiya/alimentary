require('dotenv').config()
const express = require('express');

const PORT = process.env.PORT;

const app = express();


app.get('/api', (req, res) => {
  res.send('Welcome to alimentary Api');
});

app.listen(PORT, console.log(
  'server running on port ' + PORT
));