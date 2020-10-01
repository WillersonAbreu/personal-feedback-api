# Personal Feedback Backend

##### Sobre projeto

O projeto é uma aplicação simples para poder registrar feedbacks para outros usuários cadastrados no sistema.

# Tecnologias utilizadas

- [NodeJs + npm](https://nodejs.org/en/)
- [Sequelize ORM](https://sequelize.org/master/manual/getting-started.html)

# Instalação

##### Pré requisitos:

- [NodeJs + npm](https://nodejs.org/en/)
- [Sequelize ORM](https://sequelize.org/master/manual/getting-started.html)
- [Aplicação ReactJs (Frontend)](git@github.com:WillersonAbreu/personal-feedback-frontend.git)

Abra o diretório onde você deseja manter o projeto pelo terminal e execute o seguinte comando:

```sh
$ git clone git@github.com:WillersonAbreu/personal-feedback-api.git
```

```sh
$ cd personal-feedback-api
```

- Copie o conteúdo do arquivo .env-example que fica na raíz do projeto;
- Crie um novo arquivo chamado .env na raíz do projeto;
- Cole o conteúdo copiado do primeiro arquivo dentro deste novo arquivo;
- Preencha **PORT** com o número da porta em que você deseja rodar a API Rest;
- Preencha **JWT_KEY** com uma string qualquer (de preferência um Hash);

- Copie o conteúdo do arquivo database.js.example que fica no diretório **src/config/database.js.example**;
- Crie um novo arquivo chamado **database.js** no mesmo diretório;
- Cole o conteúdo copiado do primeiro arquivo dentro deste novo arquivo;
- Preencha o atributo **host** com a string da URL onde está rodando o serviço de banco de dados MySQL;
- Preencha **username** com o nome do usuário do banco de dados MySQL;
- Preencha **password** com a senha do banco de dados MySQL;
- Preencha **database** com o nome do banco de dados MySQL;
- Crie o banco de dados como o mesmo nome que foi preenchido no **database**;

Para instalar as dependências:

```sh
$ yarn
```

ou

```sh
$ npm install
```

Rode as migrations

```sh
$ yarn sequelize db:migrate
```

ou

```sh
$ npm sequelize db:migrate
```

Para rodar em desenvolvimento:

```sh
$ yarn dev:start
```

ou

```sh
$ npm dev:start
```
