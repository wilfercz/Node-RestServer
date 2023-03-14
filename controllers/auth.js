import { response, request } from 'express';
import bcryptjs from 'bcryptjs';

import { User } from '../models/usuario.js';
import { generarJWT } from '../helpers/generar-jwt.js';

const login = async(req=request, res=response) =>{

    const { correo, password } = req.body;
    
    try {

        //Verificar si el email existe
        const usuario = await User.findOne({correo});
        if (!usuario){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        //Si el usuario está activo
        if (!usuario.estado){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        //Verificar la constraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - contraseña'
            });
        }

        //Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}

export {login};