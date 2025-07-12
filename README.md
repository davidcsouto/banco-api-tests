# banco-api-tests

Automação de testes para a API REST do projeto [`banco-api`](https://github.com/juliodelimas/banco-api), utilizando JavaScript com bibliotecas modernas como Mocha, Chai e Supertest.

## 📌 Objetivo

Este projeto tem como objetivo validar os endpoints da API de um sistema bancário RESTful utilizado na Mentoria 2.0 do Julio de Lima, contribuindo com a qualidade suas funcionalidades por meio de testes automatizados.

## 🚀 Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Teste:** [Mocha](https://mochajs.org/)
- **Asserções:** [Chai](https://www.chaijs.com/)
- **Requisições HTTP:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios de Teste:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciamento de Variáveis de Ambiente:** [dotenv](https://github.com/motdotla/dotenv)

## 📁 Estrutura de Diretórios

```
banco-api-tests/
├── test/                    # Casos de teste organizados por endpoint
│   ├── login.test.js
│   ├── transferencia.test.js
│   └── ...
├── mochawesome-report/     # Relatórios em HTML gerados após execução
├── .env                    # Arquivo de variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> `BASE_URL` deve apontar para a URL base onde a API `banco-api` está rodando.

## 🧪 Executando os Testes

Antes de rodar os testes, instale as dependências com:

```bash
npm install
```

### Rodar os testes:

```bash
npm test
```

### Gerar relatório HTML (mochawesome):

```bash
npx mocha test/**/*.test.js --reporter mochawesome
```

O relatório será salvo automaticamente no diretório `./mochawesome-report`.

Abra o arquivo `mochawesome-report/mochawesome.html` em seu navegador para visualizar os resultados.

## 🔗 Documentações das Bibliotecas Utilizadas

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 👨‍💻 Autor

[David Souto](https://github.com/davidcsouto)

Este projeto foi desenvolvido com fins educacionais e de demonstração de práticas de qualidade de software aplicadas a APIs RESTful.
