import express from "express";
import games from "./gamesRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Treino Com Node"})
    })

    app.use(
        express.json(),
        games
    )
}

export default routes;