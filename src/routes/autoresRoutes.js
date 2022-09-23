import express, { Router } from 'express';
import AutorController from "../controllers/autoresController.js"

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutoresPorId)
    .post("/autores", AutorController.cadastrarUsuario)
    .put("/autores", AutorController.atualizaUsuario)
    .delete("/autores", AutorController.excluirUsuario)



export default router;
