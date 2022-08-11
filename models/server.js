// Importamos express
const express = require('express');

// Importamos cors
const cors = require('cors');

class Server{

    // Constructor
    constructor(){
        this.app = express();
        // El puerto donde se va a levantar el servidor en process.env.PORT
        this.port = process.env.PORT;
        //
        this.usuariosPath = '/api/usuarios';
        //Indicamos al constructor que utilice los Middlewares:
        this.middlewares();
        //Indicamos al constructor que utilice las rutas:
        this.routes();
    }
    //Métodos
    middlewares(){
        //Cors
        this.app.use(cors());
        //Lectura y parseo de bodys
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        //Para todo lo que coloquemos en el path 'api/usuarios' utiliza el directorio indicado:
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        })
    }
}

module.exports = Server;