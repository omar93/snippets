const express = require('express')
const router = express.Router()

const controller = require('../controllers/registerController.js')

router.get('/', controller.index)
router.post('/new', controller.new)

module.exports = router
