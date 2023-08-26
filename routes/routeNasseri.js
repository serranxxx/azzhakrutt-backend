/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { newNasseri, getNasseri, editNasseri, deleteNasseri } = require('../controllers/Nasseri')

router.post(
    '/newNasseri', newNasseri)

router.get(
    '/getNasseri', getNasseri)

router.post(
    '/editNasseri/:id', editNasseri)

router.delete(
    '/deleteNasseri/:id', deleteNasseri)

module.exports = router