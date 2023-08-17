
const { response } = require('express')
const Yahoska = require('../models/yahoska')

const newYahoska = async (req, res = response) => {

    try {
        const item = new Yahoska(req.body)
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

const getYahoska = async (req, res = response) => {

    try {
        const data = await Yahoska.find({});

        res.json({
            ok: true,
            msg: 'Get yahoska',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed looking for items'
        })
    }

}

const editYahoska = async (req, res = response) => {
    try {
        const itemId = req.params.id; // Obtener el ID del parámetro de la URL
        const updates = req.body; // Valores actualizados

        // Buscar y actualizar el documento por su ID
        const updatedItem = await Yahoska.findByIdAndUpdate(
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
    newYahoska, 
    getYahoska,
    editYahoska
}