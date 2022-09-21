import express from "express";
import GameController from "../controllers/gamesController.js";

const router = express.Router();

router
    .get("/games", GameController.listarGames)


export default router