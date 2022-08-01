import {Router, Request, Response} from 'express'
import { createMovie, findMovieById, getAllMovies } from './controllers/movieControllers'

// validations
import { validate } from './middleware/handleValidation'
import { movieCreateValidation } from './middleware/movieValidation'

const router = Router()

//Cada rota desse arquivo corresponde a uma função da controller

export default router.get('/test', (req: Request, res: Response) => {
    res.status(200).send("API working!")
}).post('/movie', movieCreateValidation(), validate, createMovie).get("/movie/:id", findMovieById).get('/movie', getAllMovies)