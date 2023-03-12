import { response, request } from 'express';

const usersGet = (req = request, res = response)=>{

    const params = req.query;

    res.json({
        msg: 'GET API - Controlador',
        params
    });
};

const usersPost = (req = request, res = response)=>{

    const body = req.body;

    res.json({
        msg: 'POST API - Controlador',
        body
    });
};

const usersPut = (req = request, res = response)=>{

    const { id } = req.params;

    res.json({
        msg: 'PUT API - Controlador',
        id
    });
};

const usersDelete = (req = request, res = response)=>{
    res.json({
        msg: 'DELETE API - Controlador'
    });
};


export {usersGet, usersPost, usersPut, usersDelete}; 