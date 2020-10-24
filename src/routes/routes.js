const express = require('express')
const controller = require('../controllers/controller')
const router = express.Router()


router.get('/', controller.list)
router.post('/add', controller.save)
router.get('/delete/:id', controller.delete)
router.get('/edit/:id', controller.edit)
router.post('/edit/:id', controller.new)

module.exports = router