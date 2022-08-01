const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ddeu6yc.mongodb.net/?retryWrites=true&w=majority`
}

//dbUri: string de conexão ao banco mongoDB

//A Uniform Resource Identifier (URI) is a character sequence that identifies a logical (abstract) or physical resource -- usually, but not always, connected to the internet. A URI distinguishes one resource from another. URIs enable internet protocols to facilitate interactions between and among these resources.

//Quando você cria variáveis de ambiente, é necessário que a aplicação seja reiniciada.

//Acesso aas variáveis de ambiente: process.env.NOME_VARIAVEL
//O arquivo .env deve ser criado toda vez que o repo for clonado.
