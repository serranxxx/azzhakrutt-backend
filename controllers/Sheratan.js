
const { response } = require('express')
const Sheratan = require('../models/sheratan')

const newSheratan = async (req, res = response) => {

    try {
        const item = new Sheratan(req.body)
        await item.save()
        console.log(item)

        res.status(201).json({
            ok: true,
            msg: 'Sheratan uploaded',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getSheratan = async (req, res = response) => {

    try {
        const data = await Sheratan.find({});

        res.json({
            ok: true,
            msg: 'Get sheratan',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed looking for items'
        })
    }

}

const editSheratan = async (req, res = response) => {
    try {
        const itemId = req.params.id; // Obtener el ID del parámetro de la URL
        const updates = req.body; // Valores actualizados

        // Buscar y actualizar el documento por su ID
        const updatedItem = await Sheratan.findByIdAndUpdate(
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

const deleteSheratan = async (req, res = response) => {
    try {
        const itemId = req.params.id; // Obtener el ID del parámetro de la URL

        // Buscar y eliminar el documento por su ID
        const deletedItem = await Sheratan.findByIdAndDelete(itemId);

        if (!deletedItem) {
            return res.status(404).json({
                ok: false,
                msg: 'Item not found',
            });
        }

        return res.json({
            ok: true,
            msg: 'Item deleted',
            deletedItem,
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
    newSheratan, 
    getSheratan,
    editSheratan,
    deleteSheratan
}