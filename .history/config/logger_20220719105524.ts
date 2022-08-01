import winston from 'winston'
import config from 'config'

//criação de valores de níveis/tipos de erros

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

//função que irá resgatar qual é o ambiente da aplicação (dev, prod, etc)

const level = () => {
    const env = config.get<string>('env') || 'development'

    //checagem se o ambiente é de desenvolvimento
    const isDevelopment = env === 'development'

    //se for desenvolvimento, ele retorna o erro com debug, se estiver em prod retorna um aviso.
    return isDevelopment ? 'debug' : 'warn'
}

//determina as cores que vão aparecer no sistema, dependendo do erro

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
}