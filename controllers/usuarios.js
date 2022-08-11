// CREAMOS LOS CONTROLADORES PARA routes/usuarios.js

const usuariosGet = (req, res) => {
    //Request
    const { limite } = req.query;
    //Response
    res.status(200).json({
        msg: 'GET USUARIOS',
        limite
    })
}

const usuariosPost = (req, res) => {
    //Request
    const body = req.body;
    //Response
    res.status(200).json({
        msg: 'POST USUARIOS',
        body
    })
}

const usuariosPut = (req, res) => {
    //Request (desestructurada)
    const { id } = req.params; // es igual a: 'const id = req.params.id' (request estructurada)
    //Response
    res.status(200).json({
        msg: 'PUT USUARIOS',
        id
    })
}

const usuariosDelete = (req, res) => {
    //Response
    const { id } = req.params;
    //Request
    res.status(200).json({
        msg: 'DELETE USUARIOS',
        id
    })
}

//Exportamos las funciones
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}