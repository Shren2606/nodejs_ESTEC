const express = require('express');
const router = express.Router();

const estecController = require('../app/controllers/EstecControllers');

// router.get('/chart',estecController.show);
router.get('/',estecController.index);

module.exports = router;