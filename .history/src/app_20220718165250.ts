import express  from "express";
import config from 'config'

const app = express()

//JSON middleware
app.use(express.json())

//app port
const port = config.get<number>('teste') // pega o valor da propriedade do objeto que está no default.ts

app.listen(port ,async () => {
    console.log(`A aplicação está rodando na porta ${port}`)
})