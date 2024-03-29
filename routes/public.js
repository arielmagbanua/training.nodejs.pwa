const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/slides', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'slides.html'));
});

router.get('/best-images', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'best-images.html'));
});

router.get('/favorite-tweets', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'favorite-tweets.html'));
});

module.exports = router;