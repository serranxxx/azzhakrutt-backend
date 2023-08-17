/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { newCelula, getCelula, editCelula } = require('../controllers/celulas')

router.post(
    '/newCelula', newCelula)

router.get(
    '/getCelula', getCelula)

router.post(
    '/editCelula/:id', editCelula)

module.exports = router