// ENV variables
require("dotenv").config();

import express  from "express";
import config from 'config'

const app = express()

//JSON middleware
app.use(express.json())

//DB
import db from '../config/db'

//routes
import router from './router'

//Logger
import Logger from "../config/logger";

//Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

//app port
const port = config.get<number>('port') // pega o valor da propriedade do objeto que está no default.ts

//Cada vez que houver uma request o sistema executará esse middleware, sendo ele o responsável por imprimir as requisições no terminal
app.use(morganMiddleware)

// /api será o prefixo de todas as url's, e aqui, todas as funções criadas em router.ts serão atribuidas a API.
app.use('/api', router)

app.listen(port ,async () => {

    await db() //A aplicação só será iniciada após a conexão com o db

    Logger.info(`A aplicação está rodando na porta ${port}`)
})