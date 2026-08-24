# 📚 Biblioteca Virtual

Projeto de uma **Biblioteca Virtual** desenvolvido em **Node.js**, utilizando **MySQL** como banco de dados.

A aplicação tem como objetivo permitir o gerenciamento de livros, armazenando informações como título, autor e resumo.

## 🚀 Tecnologias utilizadas

- Node.js
- MySQL
- JavaScript
- npm
- Git

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- Git

Para verificar se o Node.js e o npm estão instalados:

```bash
node --version
npm --version
```

Para verificar a instalação do MySQL:

```bash
mysql --version
```

## 📥 Instalação

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd <NOME_DO_PROJETO>
```

### 2. Instale as dependências

Execute:

```bash
npm install
```

Esse comando irá instalar todas as dependências definidas no arquivo `package.json`.

## 🗄️ Configuração do banco de dados

O projeto utiliza o **MySQL** e precisa de um banco de dados chamado `biblioteca`.

### 1. Acesse o MySQL

Abra o terminal e execute:

```bash
mysql -u root -p
```

Informe a senha do seu usuário MySQL quando solicitado.

### 2. Crie o banco de dados

Execute o seguinte script:

```sql
CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE books(
    ID BIGINT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    resume TEXT NOT NULL,
    PRIMARY KEY(ID)
);
```

### 3. Verifique a criação

Para verificar se o banco foi criado:

```sql
SHOW DATABASES;
```

Para verificar as tabelas:

```sql
USE biblioteca;

SHOW TABLES;
```

Para visualizar a estrutura da tabela `books`:

```sql
DESCRIBE books;
```

## 🔐 Configuração da conexão com o banco

Configure as informações de acesso ao MySQL de acordo com o seu ambiente.

Recomenda-se utilizar um arquivo `.env` para armazenar essas configurações.

Exemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=biblioteca
```

> **Importante:** não envie o arquivo `.env` para o Git. Adicione `.env` ao arquivo `.gitignore`.

Exemplo de `.gitignore`:

```gitignore
node_modules/
.env
```

## ▶️ Executando o projeto

Depois de instalar as dependências e configurar o banco de dados, execute o projeto com:

```bash
npm start
```

Caso o projeto utilize o `node` diretamente:

```bash
node app.js
```

ou, dependendo do nome do arquivo principal:

```bash
node server.js
```

Se o projeto possuir um script de desenvolvimento com `nodemon`, pode ser utilizado:

```bash
npm run dev
```

Após iniciar a aplicação, verifique no terminal a porta em que o servidor está sendo executado.

Exemplo:

```text
Servidor executando em http://localhost:3000
```

## 🧪 Testando a aplicação

Com o servidor em execução, você pode utilizar ferramentas como:

- Postman
- Insomnia
- Navegador
- Thunder Client

para realizar requisições à API.

Exemplo:

```http
GET http://localhost:3000/books
```

> Os endpoints disponíveis podem variar de acordo com a implementação da aplicação.

## 📖 Estrutura do banco de dados

O banco de dados possui a seguinte estrutura:

### Tabela `books`

| Campo    | Tipo            | Descrição                    |
| -------- | --------------- | ---------------------------- |
| `ID`     | BIGINT UNSIGNED | Identificador único do livro |
| `title`  | VARCHAR(100)    | Título do livro              |
| `author` | VARCHAR(100)    | Autor do livro               |
| `resume` | TEXT            | Resumo do livro              |

O campo `ID` é definido como **chave primária** e possui incremento automático.

## 📝 Exemplo de cadastro

Para inserir um livro diretamente no banco de dados:

```sql
INSERT INTO books (title, author, resume)
VALUES (
    'Dom Casmurro',
    'Machado de Assis',
    'Romance publicado por Machado de Assis que narra as memórias de Bentinho.'
);
```

Para consultar os livros cadastrados:

```sql
SELECT * FROM books;
```

## 🛠️ Scripts disponíveis

Os scripts podem variar conforme o `package.json` do projeto.

Exemplo:

```bash
npm start
```

Inicia a aplicação.

```bash
npm run dev
```

Inicia a aplicação em modo de desenvolvimento.

```bash
npm test
```

Executa os testes automatizados, caso estejam configurados.

## 📁 Estrutura sugerida do projeto

Uma possível organização para o projeto:

```text
biblioteca-virtual/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── database/
│   └── app.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

A estrutura pode ser modificada conforme a arquitetura utilizada no projeto.

## 👨‍💻 Desenvolvimento

Para contribuir com o projeto:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração:

```bash
git checkout -b feature/minha-alteracao
```

3. Faça as alterações necessárias.
4. Adicione os arquivos:

```bash
git add .
```

5. Faça o commit:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

6. Envie a branch:

```bash
git push origin feature/minha-alteracao
```

7. Abra um Pull Request.

## 📄 Licença

Este projeto está disponível sob a licença definida pelos responsáveis pelo repositório.