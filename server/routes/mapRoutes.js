const express = require('express');
const mapController = require('../controllers/mapController');

const router = express.Router();

router.route('/').get(mapController.getAllMaps).post(mapController.createMap);

router.route('/:id').get(mapController.getOneMap);

module.exports = router;
