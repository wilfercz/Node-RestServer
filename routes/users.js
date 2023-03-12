import {Router} from 'express';
import {usersGet, usersPost, usersPut, usersDelete} from '../controllers/users.js';

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:id', usersPut);

router.delete('/', usersDelete);

export {router};