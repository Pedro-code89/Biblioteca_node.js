// Conexão com o banco de dados 
const database = require('../config/database.js');

/**
 * Inserir um livro na tabela "books"
 * 
 * @param {*} book - Dados do livro a ser inserido. O livro deve conter: Titulo, autor e sinopse
 * 
 * @returns {Promise<Object>} Resultado da operação: 
 * sucess em caso de inserção ou error em caso de falha
 */

function save(book) {
    return database.insert(book).into('books')
        .then(_ => {
            return {
                type: "sucess",
                msg: "Dados inseridos com sucesso!"
            }
        })
        .catch(erro => {
            return {
                type: "error",
                msg: "Erro" + erro
            }
        })
} // Fim do salvar

// Exportando a função save
module.exports = { save }