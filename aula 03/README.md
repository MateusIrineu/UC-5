# Projeto Aula 03

## Descrição
Este projeto é uma API REST simples para gerenciamento de produtos, desenvolvida em Node.js utilizando o framework Express. O objetivo é demonstrar a estruturação de um projeto backend modularizado, com boas práticas de organização de código e convenções.

## Estrutura de Pastas
```
aula 03/
│   index.js                # Ponto de entrada da aplicação
│   package.json            # Dependências e scripts do projeto
│   README.md               # Documentação do projeto
│
├── docs/
│     convencoes.md         # Convenções de nomenclatura e organização
│
├── src/
│   ├── config/
│   │     database.js       # Simulação de banco de dados (array em memória)
│   │
│   └── modules/
│       └── produto/
│           ├── controllers/
│           │     produto.controller.js  # (A ser implementado) Lógica dos endpoints
│           ├── models/
│           │     produto.model.js       # Model com métodos para manipulação dos produtos
│           └── routes/
│                 produto.route.js       # (A ser implementado) Rotas da API de produto
```

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Convenções
As convenções de nomenclatura e organização estão detalhadas em `docs/convencoes.md`.

## Como Subir o Projeto
1. **Pré-requisitos:**
   - Node.js instalado (versão 16+ recomendada)

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto (caso necessário) e defina a porta, por exemplo:
     ```env
     PORTA=3000
     ```

4. **Inicie a aplicação:**
   ```sh
   node index.js
   ```

5. **Acesse a API:**
   - A API estará disponível em `http://localhost:<PORTA>`

## Organização dos Módulos
- O projeto segue uma estrutura modular, separando controllers, models e rotas por domínio (exemplo: produto).
- O arquivo `database.js` simula um banco de dados em memória.

## Próximos Passos
- Implementar os controllers e rotas para o módulo de produto.
- Adicionar testes e documentação dos endpoints.

---

> Para mais detalhes sobre padrões e boas práticas, consulte o arquivo `docs/convencoes.md`.
