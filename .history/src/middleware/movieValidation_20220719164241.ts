import { body } from 'express-validator'

export const movieCreateValidation = () => {
   //retorna um array com os erros que estão sendo extraidos no handleValidation
    return [
        body("title").isString().withMessage("O título é obrigatório.")
    ]
}