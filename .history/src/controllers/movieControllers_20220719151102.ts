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
    
   } catch (error) {
    
   }
}