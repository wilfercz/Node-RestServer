import {Router} from 'express';
import { check } from 'express-validator';

import { login, googleSingIn } from '../controllers/auth.js';
import { validarCampos } from '../middlewares/index.js';

const routerAuth = Router();

routerAuth.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login);

routerAuth.post('/google', [
    check('id_token', 'Token de Google es Necesario').not().isEmpty(),
    validarCampos
],googleSingIn);


export {routerAuth};