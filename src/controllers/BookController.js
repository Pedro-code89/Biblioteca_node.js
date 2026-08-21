// Importando o modelo "Livro"
const Book = require('../models/Book');

function store(req, res) {
    // Receber os dados
    const title = req.body.title;
    const author = req.body.author;
    const resume = req.body.resume;

    // Solicitar a inserção no BD
    Book.save({ title, author, resume })

    // Enviar uma resposta
}