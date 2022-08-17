const mongoose = require("mongoose");
require ('dotenv').config();

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error a la hora de realizar la conexión')
    }
}

module.exports = {
    dbConection
}