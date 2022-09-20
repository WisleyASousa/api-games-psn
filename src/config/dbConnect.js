import mongoose from "mongoose";

mongoose.connect("mongodb+srv://treino-alura01:samsung15@game-node.s2zxqy3.mongodb.net/game-node?");

let db = mongoose.connection;

export default db;