import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();

app.use(express.json())
routes(app);

export default app
















// app.get('/games', (req, res) => {
//     const games = [
//         {id: 1, nome: "Horizon"},
//         {id: 2, nome: "God Of War"},
//         {id: 3, nome: "Final Fantasy"}
//     ]

//     res.send(games)
// })