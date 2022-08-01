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
        return res.status(500).json({error: "Por favor, tente mais tarde"})
   }
}

//função de encotrar filme por ID

export async function findMovieById(req: Request, res: Response) {

   try {

      //o id virá por URL param
      const id = req.params.id

      //procura o filme pelo ID
      const movie = await MovieModel.findById(id)

      //Se o filme não for encontrado
      if(!movie) {
         return res.status(404).json({ error: "O filme buscado não existe." })
      }

      return res.status(200).json(movie) 
      
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
      return res.status(500).json({error: "Por favor, tente mais tarde"})
   }
}

//função que retorna todos os filmes cadastrados

export async function getAllMovies(req: Request, res: Response) {
   try {
      //se não for passado nenhum argumento para find() ele irá retornar todos os dados da model
      const movies = await MovieModel.find()

      return res.status(200).json(movies)
      
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
      return res.status(500).json({error: "Por favor, tente mais tarde"})
   }
}

//função de remover filme cadastrado

export async function removeMovie(req: Request, res: Response) {

   try {
      const id = req.params.id
      const movie = await MovieModel.findById(id)

      if(!movie) {
         return res.status(404).json({ error: "O filme não existe."})
      }

      //remove o filme
      await movie.delete()
      return res.status(200).json({msg: "Filme removido com sucesso."})
      
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
      return res.status(500).json({error: "Por favor, tente mais tarde"})
   }

}

//função que atualiza os dados de um filme cadastrado

export async function updateMovie(req: Request, res: Response) {
   try {
      const id = req.params.id
      const movie = await MovieModel.findById(id)

      if(!movie) {
         return res.status(404).json({ error: "O filme não existe."})
      }
      
   } catch (e: any) {
      Logger.error(`Erro no sistema: ${e.message}`)
      return res.status(500).json({error: "Por favor, tente mais tarde"})
   }
}