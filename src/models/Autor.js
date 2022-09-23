import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        genero: {type: String},
        idade: {type: Number, required: true},
        cidade: {type: String},
        estado: {type: String}
    }
);
const autores = mongoose.model('autores', autorSchema);

export default autores;