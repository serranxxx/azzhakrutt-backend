/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { newNasseri, getNasseri, editNasseri } = require('../controllers/Nasseri')

router.post(
    '/newNasseri', newNasseri)

router.get(
    '/getNasseri', getNasseri)

router.post(
    '/editNasseri/:id', editNasseri)

module.exports = router