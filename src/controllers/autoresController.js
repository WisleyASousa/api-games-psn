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

    static cadastrarUsuario = (req, res) => {
        let usuario = new autores(req.body);

        usuario.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar Usuário.`})
            } else {
                res.status(201).send(usuario.toJSON())
            }
        })

    }

    static atualizaUsuario = (req, res) => {
        const id = req.params.id;
        
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: "Usuário Atualizado com Sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    
    static excluirUsuario = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Usuário Removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }
}

export default AutorSchema;