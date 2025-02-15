# Projeto Spotify Clone

*Este projeto é uma aplicação web que simula um serviço de streaming de músicas, similar ao Spotify, usando React para o frontend e Express para o backend. A aplicação exibe artistas, músicas, permite a reprodução de áudio e navegação entre páginas de artistas e músicas.*

#### Estrutura do Projeto

A estrutura do projeto é dividida em duas partes principais:

- **Frontend:** *A aplicação cliente em React com Vite.*
- **Backend:** *Um servidor Express para fornecer os dados de artistas e músicas.*

**Tecnologias Utilizadas:**
- **Frontend:**
    - **React:** *Biblioteca para construir interfaces de usuário.*
    - **Vite:** *Ferramenta de construção de projetos para desenvolvimento rápido.*
    - **React Router:** *Biblioteca para navegação entre páginas no React.*
    - **Font Awesome:** *Para ícones de interface (como o ícone de "play" usado na aplicação).*
    - **Axios:** *Cliente HTTP para fazer requisições.*
    - **Prop Types:** *Para validar as propriedades dos componentes.*
    - **CSS:** *Para estilização da interface.*

- **Backend**
    - **Express:** *Framework minimalista e flexível para construção de servidores.*
    - **CORS:** *Middleware para permitir requisições de diferentes 
origens (necessário para desenvolvimento local).*

---

##### Como Rodar o Projeto

- **Requisitos:**
*Antes de rodar o projeto, é necessário ter o Node.js e o npm instalados em sua máquina.*

**Backend:**

*Navegue até a pasta do backend:*
```
cd backend
```

*Instale as dependências:*
```
npm install
```

*Inicie o servidor:*
```
npm start
```
*O servidor estará rodando em* **http://localhost:3030** *e fornecerá os dados de artistas e músicas para o frontend.*

**Frontend**

*Navegue até a pasta do frontend:*
```
cd frontend
```

*Instale as dependências:*
```
npm install
```

*Inicie o servidor de desenvolvimento:*
```
npm run dev
```

*O frontend estará disponível em* **http://localhost:5173.**

---

##### Funcionalidades

**Backend**

*O backend fornece dois endpoints principais:*

- **GET /artists:** *Retorna uma lista de artistas.*
- **GET /songs:** *Retorna uma lista de músicas.*

*Esses endpoints são consumidos pelo frontend para exibir os dados necessários.*

**Frontend**

*O frontend é composto por várias páginas e componentes:*

- **Home:** *Página inicial do site.*
- **Artists:** *Exibe uma lista de artistas.*
- **Artist:** *Exibe detalhes de um artista, incluindo suas músicas populares.*
- **Songs:** *Exibe uma lista de músicas.*
- **Song:** *Exibe detalhes de uma música específica, incluindo o áudio e o artista relacionado.*
- **Player:** *É possível colocar a música para tocar.*

*A navegação entre as páginas é feita usando o React Router.*

#### Estrutura de Pastas
```
backend/
├─ api
│   ├─ connect.js
│   ├─ insertMany.js
│   └─ server.js
├─ package.json
├─ node_modules/

frontend/
├─ api
│   └─ api.js
├─ node_modules/
├─ src/
│   ├─ assets/
│   │    ├─ database
│   │         ├─ artists.js
│   │         └─ songs.js
│   ├─ components/
│   │    ├─ Header.jsx
│   │    ├─ ItemList.jsx
│   │    ├─ Main.jsx
│   │    ├─ Player.jsx
│   │    ├─ SingleItem.jsx
│   │    ├─ SongItem.jsx
│   │    └─ SongList.jsx
│   ├─ pages/
│   │    ├─ Artist.jsx
│   │    ├─ Artists.jsx
│   │    ├─ Home.jsx
│   │    ├─ Song.jsx
│   │    └─ Songs.jsx
│   ├─ App.jsx
│   ├─ index.css
│   └─ main.jsx
├─ package.json
└─ vite.config.js
```
-----

##### Componentes e Páginas:
- **Componente SongItem:**
    - *Exibe informações sobre uma música, incluindo o nome, imagem e duração.*
    - *A navegação é feita através do Link do React Router.*
- **Componente SongList:**
    - *Exibe uma lista de músicas.*
    - *Permite visualizar mais músicas ao clicar no botão "Ver mais".*
- **Página Artist:**
    - *Exibe informações detalhadas sobre um artista, como o nome e o banner.*
    - *Lista as músicas populares do artista.*
- **Página Song:**
    - *Exibe os detalhes de uma música específica, incluindo o player de áudio e informações sobre o artista.*
