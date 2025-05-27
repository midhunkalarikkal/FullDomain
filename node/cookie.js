const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Use cookie-parser middleware
app.use(cookieParser());

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Midhun', { maxAge: 60000, httpOnly: true });
  res.send('Cookie has been set!');
});

// Route to read the cookie
app.get('/get-cookie', (req, res) => {
  const user = req.cookies.username;
  if (user) {
    res.send(`Hello, ${user}`);
  } else {
    res.send('No cookie found');
  }
});

// Route to clear the cookie
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie has been cleared');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
