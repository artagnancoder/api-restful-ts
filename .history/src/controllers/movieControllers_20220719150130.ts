import { Request, Response } from "express"

//Model
import { MovieModel } from "../models/Movie"

//Logger
import Logger from "../../config/logger"

//funções dos endpoints de criação/leitura

export async function createMovie(req: Request, res: Response) {
    return res.status(200).send('Deu certo o controller')
}