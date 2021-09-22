const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('Home Page')
});

router.get('/add-task', (req, res, next) => {
    res.send('Get Add Task Page')
});

router.post('/add-task', (req, res, next) => {
    res.send('Post Add Task Page')
});

router.get('/edit-task/:taskId', (req, res, next) => {
    res.send('Get Edit Task Page')
});

router.post('/edit-task/:taskId', (req, res, next) => {
    res.send('Post Edit Task Page')
});

module.exports = router;