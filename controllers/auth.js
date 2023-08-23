
const { response } = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs');


const newUser = async (req, res = response) => {
    const { Name, Email, Password } = req.body;

    try {
        // Generar el hash de la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        const item = new User({
            Name,
            Email,
            Password: hashedPassword, // Usar la contraseña codificada
        });

        await item.save();

        res.status(201).json({
            ok: true,
            msg: 'User uploaded',
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.message || 'Internal Server Error',
        });
    }
}

const login = async (req, res = response) => {

    const { Email, Password } = req.body;

    try {

        const usuario = await User.findOne({ Email });

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: `the user with email: ${Email} was not found or password is incorrect`,
                data: null
            });
        }

        // Confirm password
        const validPassword = bcrypt.compareSync(Password, usuario.Password);

        if (!validPassword) {
            return res.status(404).json({
                ok: false,
                msg: `the user with email: ${Email} was not found or password is incorrect`,
                data: null
            });
        }

        // Generate JWT
        // const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok: true,
            msg: 'Valid user',
            data: usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "An error occurred, please talk to the administrator",
            data: null
        });
    }

}


module.exports = {
    newUser,
    login,
}