const express = require('express')
const router = express.Router()
const DestControllers = require('../controllers/destinations.js')

router.use('/', DestControllers.getAllDest)

module.exports = router;