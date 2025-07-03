# Desafio MB

Este projeto consiste em uma aplicação full-stack com frontend em Vue.js e backend em Node.js/Express.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd desafio-mb
```

### 2. Instalar dependências e build do Frontend

```bash
cd client
npm install
npm run build
```

Este comando irá gerar os arquivos estáticos na pasta `dist/` que o backend utilizará para servir a aplicação.

### 3. Instalar dependências do Backend

```bash
cd ../server
npm install
```

### 4. Executar o Backend

```bash
npm run dev
```

O servidor estará rodando na porta `8000`.

## 🌐 Acessando a aplicação

Após executar todos os passos acima, você pode acessar:

- **Frontend**: http://localhost:8000/registration
- **Backend API**: http://localhost:8000 (endpoints da API)

## 📁 Estrutura do projeto

```
desafio-mb/
├── client/                 # Frontend Vue.js
│   ├── src/               # Código fonte do frontend
│   ├── public/            # Arquivos públicos
│   ├── package.json       # Dependências do frontend
│   └── vite.config.js     # Configuração do Vite
├── server/                # Backend Node.js/Express
│   ├── src/               # Código fonte do backend
│   │   ├── main.js        # Arquivo principal do servidor
│   │   ├── router/        # Rotas da aplicação
│   │   ├── controller/    # Controladores
│   │   ├── validation/    # Validações
│   │   ├── response/      # Respostas padronizadas
│   │   └── util/          # Utilitários
│   └── package.json       # Dependências do backend
└── dist/                  # Arquivos estáticos do frontend (gerados pelo build)
```

## 🔧 Scripts disponíveis

### Frontend (client/)
- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera os arquivos de produção

### Backend (server/)
- `npm run dev` - Executa o servidor em modo desenvolvimento com watch

## 📝 Notas importantes

- O frontend deve ser buildado antes de executar o backend
- O backend serve os arquivos estáticos do frontend na rota `/registration`
- O servidor roda na porta 8000 por padrão
- O projeto utiliza ES modules (type: "module" nos package.json)

## 🛠️ Tecnologias utilizadas

- **Frontend**: Vue.js 3, Vite
- **Backend**: Node.js, Express.js
- **Build Tool**: Vite