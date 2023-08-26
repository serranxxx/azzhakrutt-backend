/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { newYahoska, getYahoska, editYahoska, deleteYahoska } = require('../controllers/Yahoska')

router.post(
    '/newYahoska', newYahoska)

router.get(
    '/getYahoska', getYahoska)

router.post(
    '/editYahoska/:id', editYahoska)

router.delete(
    '/deleteYahoska/:id', deleteYahoska)

module.exports = router