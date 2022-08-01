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
}