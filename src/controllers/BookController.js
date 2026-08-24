// Importando o modelo "Livro"
const Book = require('../models/Book');

async function store(req, res) {
    // Receber os dados
    const title = req.body.title;
    const author = req.body.author;
    const resume = req.body.resume;
    const cover = "https://tse1.mm.bing.net/th/id/OIP.ZJ5Yx3yjKeN6WVoU7BkqDAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    // Solicitar a inserção no BD
    const msg = await Book.save({ title, author, resume, cover })

    // Enviar uma resposta
    return res.send(msg)
}

module.exports = { store }