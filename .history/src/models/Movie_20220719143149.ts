// Model A responsabilidade dos models é representar o negócio. Também é responsável pelo acesso e manipulação dos dados na sua aplicação.

import { model, Schema } from 'mongoose'

const movieSchema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: String},
        stars: {type: Array},
        poster: {type: String}
    },
    {
        timestamps: true //marca a data que o filme foi criado/atualizado no banco
    }
)

export const MovieModel = model("Movie", movieSchema)