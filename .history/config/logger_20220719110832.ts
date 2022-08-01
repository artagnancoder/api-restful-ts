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

winston.addColors(colors) //define as cores no winston

//Formatação da mensagem, forma como ela irá se aprensentar no terminal

const format = winston.format.combine(
    //momento que a msg foi gerada
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}),
    //permissão para que as msg sejam coloridas
    winston.format.colorize({ all: true}),
    //formato que a mensagem irá se apresentar
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    )

)

//constante que irá criar um arquivo de erro

const transports = [
    new winston.transports.Console(),
    //criação de um arquivo de log para cada tipo de erro
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error'
    }),
    new winston.transports.File({
        filename: 'logs/warn.log',
        level: 'warn'
    }),
    new winston.transports.File({
        filename: 'logs/info.log',
        level: 'info'
    }),
    new winston.transports.File({
        filename: 'logs/http.log',
        level: 'http',
    }),
    new winston.transports.File({
        filename: 'logs/debug.log',
        level: 'debug'
    }),
    //arquivo geral de logs
    new winston.transports.File({ filename: 'logs/all/log'})

]
