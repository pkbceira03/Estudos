import database from "../infra/database.js";
import selecaoRepository from './repository.js'


class selecaoController{
    async getAllSelecoes(req, res) {
        const result = await selecaoRepository.getAllSelecoes();
        res.status(200).json(result)
    }

    async getSelecaoById(req, res) {
        const id = req.params.id
        const result = await selecaoRepository.getSelecaoById(id);
        res.status(200).json(result)
    }

    async createSelecao(req,res) {
        let corpo = req.body;
        const result = await selecaoRepository.createSelecao(corpo)
        res.status(201).json(result)
    }

    async updateSelecaoById (req, res) {
        const id = req.params.id;
        const corpo = req.body;
        const hora = new Date();

        const result = await selecaoRepository.updateSelecao(corpo, hora, id)
        
        res.status(200).json(result)
    }

    async deleteSelecao(req, res) {
        const id = req.params.id;
        await selecaoRepository.deleteSelecao(id)
        res.status(204).send()
    }
}

export default new selecaoController