<h1 align="center">Desafio 1 Chapter III: Database Queries 👩🏾‍💻</h1>

### 💻 Descrição

👉 Acesse as instruções do Desafio: [Instruções Desafio 1 Chapter III: Database Queries](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)

<p align="justify">O desafio consistia em realizar consultas no banco de dados PostgreSQL utilizando TypeORM. Não houve alteração em nenhuma parte do código a não ser nas queries para o Banco de Dados.

##### Tipos de consultas utilizadas no projeto:

| ORM                                     | Raw SQL                      | Query Builder                                      |
| --------------------------------------- | ---------------------------- | -------------------------------------------------- |
| Utilização de POO para representar o BD | Forma nativa de escrever SQL | Executar comandos SQL através de métodos e funções |

### 🚀 Requisitos

Aqui irei listar todos os requisitos da aplicação. Isto é, a parte do código que foi modificada e o que era esperado no resultado dos testes.

##### Repositórios da aplicação

UsersRepository

- [x] Método _findUserWithGamesById_
- [x] Método _findAllUsersOrderedByFirstName_
- [x] Método _findUserByFullName_

GamesRepository

- [x] Método _findUserWithGamesById_
- [x] Método _findAllUsersOrderedByFirstName_
- [x] Método _findUserByFullName_

##### Especificação dos testes

- [x] UsersRepository deve ser capaz de retornar um usuário com a lista de jogos passando seu ID de usuário.

- [x] UsersRepository deve ser capaz de retornar uma lista de usuários ordenada pelo primeiro nome do usuário em ordem crescente
- [x] UsersRepository deve ser capaz de encontrar o usuário passando seu nome completo
- [x] GamesRepository deve ser capaz de encontrar um jogo dado um título inteiro ou parcial
- [x] GamesRepository deve ser capaz de retornar a quantidade total de jogos na tabela de Games
- [x] GamesRepository deve ser capaz de encontrar um usuário procurando pelo ID de um jogo na sua lista de Games

### :nut_and_bolt: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript][typescript]
- [TypeORM][typeorm]
- [PostgreSQL][postgresql]
- [Nodejs][nodejs]

[typescript]: https://www.typescriptlang.org/
[nodejs]: https://nodejs.org/en/
[postgresql]: https://www.postgresql.org/
[typeorm]: https://typeorm.io/

### 🤔 Como rodar o projeto?

```bash
# Clone o repositório
git clone https://github.com/Gabriek0/ignite-database-queries-challenge.git

# Mude para o diretório do projeto
cd https://github.com/Gabriek0/ignite-database-queries-challenge.git

# Instale as dependências
yarn

# Rode o projeto
yarn test
```

### 🧑 Resolução do Desafio realizado por:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Gabriek0">
        <img src='https://avatars.githubusercontent.com/u/89749843?v=4' width="100px;" alt=""/>
        <br />
          <sub>
            <b>Gabriel Henrique</b>
          </sub>
      </a>
    </td>

  </tr>
</table>
