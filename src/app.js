import express from "express";
import db from "./config/dbConnect.js"
import games from "./models/Game.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("once", () => {
    console.log("Conexão com o banco feita com sucesso");
})


const app = express();

app.use(express.json())

//Iniciando  os Gets

app.get('/', (req, res) => {
    res.status(200).send("Livraria de Jogos");
})

//criando rotas para os games
app.get('/games', (req, res) => {
    games.find((err, games) => {
        res.status(200).json(games);
    })
})
app.get('/games/:id', (req, res) => {
    let index = buscaGame(req.params.id);
    res.json(games[index]);
})

app.post('/games', (req, res) => {
    games.push(req.body);
    res.status(201).send('Jogo Cadastrado com sucesso');
})

app.put('/games/:id', (req, res) => {
    let index = buscaGame(id);
    games[index].titulo = req.body.titulo;
    res.json(games);
})

app.delete('/games/:id', (req, res) => {
    let{id} = req.params;
    let index = buscaGame(id);
    livros.splice(index, 1);
    res.send(`Game ${id} removido com sucesso`)
})

function buscaGame(id){
    return games.findIndex(game => game.id == id)
}

export default app
















// app.get('/games', (req, res) => {
//     const games = [
//         {id: 1, nome: "Horizon"},
//         {id: 2, nome: "God Of War"},
//         {id: 3, nome: "Final Fantasy"}
//     ]

//     res.send(games)
// })