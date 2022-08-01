import mongoose from "mongoose"; //cria a conexão
import config from 'config'

async function connect() {
    
    const dbUri = config.get<string>("dbUri")

    try {
        
    } catch (e) {
        console.log("Não foi possível conectar!");
        console.log(`Erro: ${e}`);
    }
}