const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'Username'});
});

module.exports = router;