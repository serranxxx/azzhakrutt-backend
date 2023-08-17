/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { getCurso, newCurso, editCurso, newSacramento, getSacramento } = require('../controllers/Cursos')

router.post(
    '/newCurso', newCurso)

router.get(
    '/getCurso', getCurso)

router.post(
    '/editCurso/:id', editCurso)

router.post(
    '/newSacramento', newSacramento)

router.get(
    '/getSacramentos', getSacramento)

module.exports = router