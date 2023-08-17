
const { response } = require('express')
const Curso = require('../models/cursos')
const Sacramento = require('../models/sacramentos')

const newCurso = async (req, res = response) => {

    try {
        const item = new Curso(req.body)
        await item.save()
        console.log(item)

        res.status(201).json({
            ok: true,
            msg: 'curso uploaded',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getCurso = async (req, res = response) => {

    try {
        const data = await Curso.find({});

        res.json({
            ok: true,
            msg: 'Get cursos',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed looking for cursos'
        })
    }

}

const editCurso = async (req, res = response) => {
    try {
        const itemId = req.params.id; // Obtener el ID del parámetro de la URL
        const updates = req.body; // Valores actualizados

        // Buscar y actualizar el documento por su ID
        const updatedItem = await Curso.findByIdAndUpdate(
            itemId,
            { $set: updates },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({
                ok: false,
                msg: 'curso not found',
            });
        }

        return res.json({
            ok: true,
            msg: 'curso updated',
            updatedItem,
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            ok: false,
            msg: 'Internal server error',
        });
    }
};

const newSacramento = async (req, res = response) => {

    try {
        const item = new Sacramento(req.body)
        await item.save()
        console.log(item)

        res.status(201).json({
            ok: true,
            msg: 'Sacramento uploaded',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getSacramento = async (req, res = response) => {

    try {
        const data = await Sacramento.find({});

        res.json({
            ok: true,
            msg: 'Get Sacramentos',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed looking for items'
        })
    }

}


module.exports = {
    newCurso,
    getCurso,
    editCurso,
    newSacramento,
    getSacramento
}