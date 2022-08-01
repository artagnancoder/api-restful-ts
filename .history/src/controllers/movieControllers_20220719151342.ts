import { Request, Response } from "express"

//Model
import { MovieModel } from "../models/Movie"

//Logger
import Logger from "../../config/logger"

//funções dos endpoints de criação/leitura
//As funções serão importadas no Router.ts

export async function createMovie(req: Request, res: Response) {
   try {

    //pega os dados do body
    const data = req.body
    //cria o filme com os dados que foram fornecidos
    const movie = await MovieModel.create(data)
    //Retorna sucesso e informa o movie para, se necessário, ser mostrado no front
    return res.status(200).json(movie)
    
   } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`)
   }
}