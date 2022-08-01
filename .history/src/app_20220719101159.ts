import express  from "express";
import config from 'config'

const app = express()

//JSON middleware
app.use(express.json())

//DB
import db from '../config/db'

//routes
import router from './router'

//app port
const port = config.get<number>('port') // pega o valor da propriedade do objeto que está no default.ts

// /api será o prefixo de todas as url's, e aqui, todas as funções criadas em router.ts serão atribuidas a API.
app.use('/api', router)

app.listen(port ,async () => {
    console.log(`A aplicação está rodando na porta ${port}`)
})