import games from "../models/Game.js"

class GameController{
    static listarGames = (req, res) => {
        games.find((err, games) => {
            res.status(200).json(games);
        })
    }

    static listarGamesID = (req, res) => {
        const id = req.params.id;
        
        games.findById(id, (err, games) => {
            if(err) {
                res.status(400).send({message: `${err.message} - ID do Jogo Não localizado`})
            } else {
                res.status(200).send(games)
            }
        })
    }

    static CadastrarGames = (req, res) => {
        let game = new games(req.body);

        game.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar Jogo`})
            } else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static AtualizarGames = (req, res) => {
        const id = req.params.id;

        games.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Jogo Atualizado com sucesso"})
            } else {
                res.status(500).send({ message: err.message})
            }
        })
    }

    static ExcluirGames = (req, res) => {
        const id = req.params.id;

        games.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Jogo Excluido com Sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        }) 
    }



}

export default GameController;