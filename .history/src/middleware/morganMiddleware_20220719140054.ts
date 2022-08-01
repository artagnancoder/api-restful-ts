//middleware de configuração
import morgan, { StreamOptions } from "morgan";
import config from 'config';
import Logger from "../../config/logger";

//stream que irá ler todas as requisições HTTP
const stream: StreamOptions = {
    //log da requisição onde esse middleware será aplicado
    //Baseado nas configurações do Logger
    write: (message) => Logger.http(message)
}