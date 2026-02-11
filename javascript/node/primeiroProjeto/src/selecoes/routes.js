import { Router } from "express";
import selecaoController from './controller.js'

const selecaoRouter = Router();

selecaoRouter.get('/selecoes', selecaoController.getAllSelecoes)
selecaoRouter.get('/selecoes/:id', selecaoController.getSelecaoById)
selecaoRouter.post('/selecoes', selecaoController.createSelecao)
selecaoRouter.delete('/selecoes/:id', selecaoController.deleteSelecao)
selecaoRouter.put('/selecoes/:id', selecaoController.updateSelecaoById)

export default selecaoRouter