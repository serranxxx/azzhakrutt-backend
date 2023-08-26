
const { response } = require('express')
const Nasseri = require('../models/Nasseri')

const newNasseri = async (req, res = response) => {

    try {
        const item = new Nasseri(req.body)
        await item.save()
        console.log(item)

        res.status(201).json({
            ok: true,
            msg: 'Nasseri uploaded',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getNasseri = async (req, res = response) => {

    try {
        const data = await Nasseri.find({});

        res.json({
            ok: true,
            msg: 'Get nasseri',
            data: data
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Failed looking for items'
        })
    }

}

const editNasseri = async (req, res = response) => {
    try {
        const itemId = req.params.id; // Obtener el ID del parámetro de la URL
        const updates = req.body; // Valores actualizados

        // Buscar y actualizar el documento por su ID
        const updatedItem = await Nasseri.findByIdAndUpdate(
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

const deleteNasseri = async (req, res = response) => {
    try {
        const itemId = req.params.id; // Obtener el ID del parámetro de la URL

        // Buscar y eliminar el documento por su ID
        const deletedItem = await Nasseri.findByIdAndDelete(itemId);

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
    newNasseri, 
    getNasseri,
    editNasseri,
    deleteNasseri
}