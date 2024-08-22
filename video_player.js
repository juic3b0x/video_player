#!/usr/bin/env node

/**
 * # juic3b0x 2024 - video_player.js
 * A simple Node.js website that allows the user to input a video URL and play it in a video player.
 * 
 * Dependencies: Express, path
 * Usage: 
 * - Run the script: `node video_player.js`
 * - Access the website in your browser at `http://localhost:3000`
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
