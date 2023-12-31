/* 
    Rustas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validar-campos')
const router = Router()

const { getSheratan, newSheratan, editSheratan, deleteSheratan } = require('../controllers/Sheratan')

router.post(
    '/newSheratan', newSheratan)

router.get(
    '/getSheratan', getSheratan)

router.post(
    '/editSheratan/:id', editSheratan)

router.delete(
    '/deleteSheratan/:id', deleteSheratan)

module.exports = router