const express = require('express');

const router = express.Router();

router.use('/start', (req, res, next) => {
    console.log('In func 1');
});

router.use('/', (req, res, next) => {
    console.log('In func 2');
});

module.exports = router;