const express = require('express');
const path = require('path');

const app = express();

const PORT = 3001;

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "iframe-ancestors 'none'");
    next();
})

app.get('/example1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exampleone.html'));
});


app.listen(PORT, () => {
    console.log(`Server 1 is up http://localhost:${PORT}`)
})