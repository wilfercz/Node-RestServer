
import dotenv from 'dotenv';
import * as url from 'url';
import {Server} from './models/server.js';

/* Directorio */
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
/* Variables de Entorno */
dotenv.config();

/* Servidor */
const server = new Server();

server.listen();