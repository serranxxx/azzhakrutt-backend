/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { newYahoska, getYahoska, editYahoska } = require('../controllers/Yahoska')

router.post(
    '/newYahoska', newYahoska)

router.get(
    '/getYahoska', getYahoska)

router.post(
    '/editYahoska/:id', editYahoska)

module.exports = router