const express = require('express');
const apiKeysController = require('../controllers/apiKeysController');

const router = express.Router();

router.route('/').get(apiKeysController.getMapboxAPI);


module.exports = router;
