//Esse middleware irá lidar com todas as validações do sistema. Ele irá pegar todos os erros gerados por validações, enviar de volta para a rota e impedir a criação/alteração de algum dado.

import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validate = (req: Request, res: Response, next: NextFunction) => {

    //função que irá puxar todos os erros gerados por uma requisição.
    const errors = validationResult(req)

    //verifica se não há erros e prossegue com a requisição
    if(errors.isEmpty()) {
        return next()
    } 

    const extractedErrors: object[] = []

    //converte o erros em array, itera por todos os itens e os coloca dentro do array de extractedErros
    //err.param = origem do erro
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg}))

    return res.status(422).json({
        errors: extractedErrors
    })
}