import express from 'express';
import cors from 'cors';

import { router } from '../routes/users.js';
import { dbConnection } from '../db/config.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoute = '/api/users';
        
        //Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de la Aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y Parseo del Body
        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersRoute, router);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Aplicación desplegada en http://localhost:${this.port}...`);
        }); 
    }

};

export {Server};