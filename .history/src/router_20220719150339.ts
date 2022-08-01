import {Router, Request, Response} from 'express'
import { createMovie } from './controllers/movieControllers'

const router = Router()

//Cada rota desse arquivo corresponde a uma função da controller

export default router.get('/test', (req: Request, res: Response) => {
    res.status(200).send("API working!")
}).post('/movie', createMovie)