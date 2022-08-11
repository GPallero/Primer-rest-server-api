const { Router } = require('express');
//Requerimos los controladores que creamos en controlers/usuarios.js
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');

const router = Router();

//Rutas de mi API referidas a usuarios:
router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/:id', usuariosDelete);

//06/06 AGREGAR A github actualización commit: "rutas de mi API referidas a usuarios."
//AHORA VAMOS A VER COMO ATRAPAMOS Y QUE ES PARAM (RUTAS PARAMETRIZADAS)
module.exports = router;