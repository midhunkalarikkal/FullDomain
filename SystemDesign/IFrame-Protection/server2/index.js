const express = require('express');
const path = require('path');


const app = express();

const PORT = 3002;

app.get('/iframe-website1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/iframe-website1.html'));
})

app.listen(PORT, () => {
    console.log(`Server 2 is up http://localhost:${PORT}`)
})