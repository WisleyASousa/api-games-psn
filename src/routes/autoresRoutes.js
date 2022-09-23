import express, { Router } from 'express';
import AutorController from "../controllers/autoresController.js"

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutoresPorId)



export default router;
