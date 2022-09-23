import autores from "../models/Autor.js"

class AutorSchema{

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id de usuário não encontrado`})
            } else {
                res.status(200).send(autores);
            }
        })

    }


}

export default AutorSchema;