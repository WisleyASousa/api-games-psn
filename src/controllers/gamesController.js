import games from "../models/Game.js"

class GameController{
    static listarGames = (req, res) => {
        games.find((err, games) => {
            res.status(200).json(games);
        })
    }
}

export default GameController;