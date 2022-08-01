//middleware de configuração
import morgan, { StreamOptions } from "morgan";
import config from 'config';
import Logger from "../../config/logger";

//stream que irá ler todas as requisições HTTP
const stream: StreamOptions = {
    //log da requisição onde esse middleware será aplicado
    //Baseado nas configurações do Logger
    write: (message) => Logger.http(message),
}

//Variável que não imprime mais as mensagens do Morgan quando estiver em produção
const skip = () => {
    //verificação de ambiente
    const env = config.get<string>('env') || 'development'
    return env != 'development'
}

//configuração do morgan middleware
const morganMiddleware = morgan(
    //definição do padrão de resposta da mensagem
    ":method :url :status :res[content-length] - :response-time ms", {stream, skip}
)

export default morganMiddleware