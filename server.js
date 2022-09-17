import express from "express";

const app = express();

app.get('/games', (req, res) => {
    const games = [
        {id: 1, nome: "Horizon"},
        {id: 2, nome: "God Of War"},
        {id: 3, nome: "Final Fantasy"}
    ]

    res.send(games)
})
app.listen(3000, () => console.log(`API já está já está funcionando e aceitando requisições!`))

