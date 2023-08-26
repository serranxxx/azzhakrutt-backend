/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { newBite, getBite, editBite, deleteBite } = require('../controllers/Bite')

router.post(
    '/newBite', newBite)

router.get(
    '/getBite', getBite)

router.post(
    '/editBite/:id', editBite)

router.delete(
    '/deleteBite/:id', deleteBite)

module.exports = router