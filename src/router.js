const express = require('express');

const router = express.Router();
const controller = require('./controller');

router.get('/images', controller.getImages);

module.exports = router;
