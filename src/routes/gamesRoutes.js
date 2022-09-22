import express from "express";
import GameController from "../controllers/gamesController.js";

const router = express.Router();

router
    .get("/games", GameController.listarGames)
    .get("/games/:id", GameController.listarGamesID)
    .post("/games", GameController.CadastrarGames)
    .put("/games/:id", GameController.AtualizarGames)
    .delete("/games", GameController.ExcluirGames)



export default router;