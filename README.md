<h1 align="center">Orange Evolution</h1>

![Preview do layout](https://res.cloudinary.com/dofx12yrd/image/upload/v1668549923/Captura_de_tela_de_2022-11-15_19-00-03_vqg47i.png)

<!-- <center><img src="https://d335luupugsy2.cloudfront.net/images/landing_pages/2520863/1644350322045avatar_v2.png" width="400" height="300" align="center" /></center>
<br /> -->

## :orange_book: Descrição do projeto:
O projeto consiste em uma plataforma de ensino da [Orange Juice](https://digital.fcamara.com.br/orangejuice) focada em três trilhas de aprendizado: Full Stack, UX/UI Design e QA. Nessa plataforma, materiais de autores variados são disponibilizados de forma organizada e intuitiva para cada usuário, com base em seus interesses.

## :computer: Acesso ao Projeto:
Para executar o projeto na sua máquina você precisa ter instalado o [Node.js](https://nodejs.org/en/)

### :electric_plug: Como executar
Após [baixar]() ou clonar (necessita ter o git instalado) este repositório :
- Localize e navegue até a pasta do projeto no terminal (caso tenha sido baixado é necessário extraí-lo);
- No terminal execute os comandos: 

``` bash
# Navegue para a pasta do front-end
$ cd frontend

# Instale as dependências
$ npm install

# Inicie o servidor do Vite
$ npm run dev
```

- Para iniciar o nosso servidor back-end, abra uma nova aba ou janela do terminal e, na pasta do projeto, execute os comandos:


``` bash
# Navegue para a pasta do back-end
$ cd backend

# Instale as dependências
$ npm install

# Inicie o servidor do back-end
$ npm run server
```

### :open_file_folder: Documentações
#### Back-end:
- Documentação da api feita com o [Swagger](https://swagger.io/) e pode ser acessada na rota `/swagger` da aplicação backend.
- Credenciais da conta do admin: `Email: Admin@gmail.com, Senha: 123456@`

#### Front-end:
- Utiliza dados mockados para fazer a exibição dinâmica dos conteúdos das trilhas e do tracking de progresso do usuário. O mock está disponível no path de arquivos `frontend/src/mock/content.json`.
