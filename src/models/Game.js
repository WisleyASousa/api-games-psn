import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        produtora: {type: String, required: true},
        plataforma: {type: String, required: true},
        tamanhoGB: {type: Number}
    }
);
const games = mongoose.model('games', gameSchema);

export default games;
