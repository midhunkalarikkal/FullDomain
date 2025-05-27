const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

app.use(session({
  secret: 'your-secret-key',           // used to sign the session ID cookie
  resave: false,                       // don't save session if unmodified
  saveUninitialized: true,            // save new sessions that are uninitialized
  cookie: { maxAge: 60000 }           // session expires after 1 minute (in ms)
}));

// Route to create/set session
app.get('/login', (req, res) => {
  req.session.user = { name: 'Midhun', role: 'MERN Developer' };
  res.send('Session is set!');
});

// Route to access session
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user.name}, Role: ${req.session.user.role}`);
  } else {
    res.send('No session found. Please login.');
  }
});

// Route to destroy session
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error destroying session');
    }
    res.send('Session destroyed. Logged out.');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
