const express = require('express')
const router = express.Router()

router.use('/destinations', require('/destinations.js'))

module.exports = router;