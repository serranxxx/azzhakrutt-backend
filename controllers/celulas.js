
const { response } = require('express')
const Celula = require('../models/celula')

const newCelula = async (req, res = response) => {

    try {
        const item = new Celula(req.body)
        await item.save()
        console.log(item)

        res.status(201).json({
            ok: true,
            msg: 'Item uploaded',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getCelula = async (req, res = response) => {

    try {
        const data = await Celula.find({});

        res.json({
            ok: true,
            msg: 'Get celulas',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed looking for items'
        })
    }

}

const editCelula = async (req, res = response) => {
    try {
        const itemId = req.params.id; // Obtener el ID del parámetro de la URL
        const updates = req.body; // Valores actualizados

        // Buscar y actualizar el documento por su ID
        const updatedItem = await Celula.findByIdAndUpdate(
            itemId,
            { $set: updates },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({
                ok: false,
                msg: 'Item not found',
            });
        }

        return res.json({
            ok: true,
            msg: 'Item updated',
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


module.exports = {
    newCelula, 
    getCelula,
    editCelula
}