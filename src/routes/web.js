/* IMPORTA O MODULO ROUTER DO EXPRESS */
const router = require('express').Router()

const BookController = require('../controllers/BookController')
/* ROTAS */

// GET   /books             =>   listar todos livros
// GET   /books/new         =>   exibir o form
// POST  /books/new         =>   cadastrar o livro
// GET   /books/:id         =>   exibir o livro
// POST  /books/edit/:id    =>   editar o livro
// POST  /books/delete/:id  =>   excluir o livro

router.get('/', (req, res) => {
  res.render('pages/home')
})

router.get('/books/new', (req, res) => {
  res.render('pages/book_form')
})

router.post('/books/new', BookController.store);

/* EXPORTA AS ROTAS PARA OUTRO ARQUIVO */
module.exports = router