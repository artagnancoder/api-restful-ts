import mongoose from "mongoose"; //cria a conexão
import config from 'config'
import Logger from "./logger";


async function connect() {
    
    const dbUri = config.get<string>("dbUri")

    try {
        //conexão
        await mongoose.connect(dbUri)
        Logger.info('Conectou ao banco de dados.');
        
    } catch (e) {
        Logger.error("Não foi possível conectar!");
        Logger.error(`Erro: ${e}`);
    }
}

export default connect