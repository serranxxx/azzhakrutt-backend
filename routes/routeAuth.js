
const { Router } = require('express')
const router = Router()

const { newUser, login, } = require('../controllers/auth')

router.post( '/newUser', newUser)
router.post('/login', login)
// router.get('/renew', renewToken)


module.exports = router