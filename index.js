/* IMPORTANDO DEPENDÊNCIAS */


const express = require('express');


// IMPORTANDO AS ROTAS
const routes = require('./src/routes/web')


/* CONFIGURAÇÕES DO SERVIDOR */


const app = express() /* LIGANDO O EXPRESS */
const port = 3000 /* DEFININDO A PORTA */

app.set('view engine', 'ejs')

//Definindo ejs como motor de template padrão
app.set('views', './src/views');

// Configurar o backend
app.use(express.urlencoded({ extended: true }))

/* ROTAS */

// UTILIZANDO ROTAS DO ARQUIVO web.js
app.use(routes)

/* ESCUTA REQUISIÇÃO HTTP */

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`)
})