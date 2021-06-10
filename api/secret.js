const router = require('express').Router();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

router.get('/get', (req, res) => {
    res.json({ randomNumber: getRandomArbitrary(1, 1000) });
});

module.exports = router;