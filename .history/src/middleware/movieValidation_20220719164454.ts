import { body } from 'express-validator'

export const movieCreateValidation = () => {
   //retorna um array com os erros que estão sendo extraidos no handleValidation
    return [
        body("title").isString().withMessage("O título é obrigatório.").isLength({min: 5}).withMessage("O título precisa ter no mínimo 5 caracteres.")
    ]
}