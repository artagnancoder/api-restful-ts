import mongoose from "mongoose"; //cria a conexão
import config from 'config'

async function connect() {
    
    const dbUri = config.get<string>("dbUri")

    try {
        //conexão
        await mongoose.connect(dbUri)
        console.log('Conectou ao banco de dados.');
        
    } catch (e) {
        console.log("Não foi possível conectar!");
        console.log(`Erro: ${e}`);
    }
}