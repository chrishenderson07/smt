# SmashTV

Bem-vindo ao SmashTV, uma aplicação web para assistir jogos esportivos ao vivo!

## Visão Geral

SmashTV é uma plataforma que permite aos usuários assistir a uma ampla variedade de jogos esportivos ao vivo e descobrir novos conteúdos esportivos com base em suas preferências.

## Funcionalidades Principais

- Navegação de Jogos: Explore uma ampla gama de jogos esportivos ao vivo, organizados por esporte, liga e popularidade.
- Visualização ao Vivo: Assista a transmissões ao vivo de jogos esportivos diretamente na plataforma.
- Visualização de Melhores momentos de diversos Jogos.
- Visualizar o Calendário de torneios e jogos.
- Apresenta uma Lista de Treinadores e seus respectivos curriculos.
- Notificações: Fique atualizado com notificações sobre jogos ao vivo, comentários em seus posts e atualizações da plataforma.

## Tecnologias Utilizadas

- **Frontend:** NextJS, Typescript, TailwindCSS
- **Backend:** Node.js, Typescript
- **Banco de Dados:** PostgreSQL, Prisma

## Instalação do Projeto

1. Clone o repositório: `git clone https://github.com/`
2. Instale as dependências do frontend e do backend: `npm install`
3. Configure as variáveis de ambiente necessárias, como chaves de acesso ao banco de dados.
4. Inicie em ambiente de Dev: `npm run dev`
5. Ou inicie em ambiente de Produção: `npm start`
6. Acesse a aplicação através do navegador web utilizando o endereço local fornecido pelo servidor.

## Backend

Para rodar o backend precisamos seguir alguns passos para que o funcionamento ocorra de forma correta.

### Docker

0. Baixe a imagem PostgreSQL
1. Rode um novo Container do Docker `docker run --name SmashTvTest -p 5432:5432 -e POSTGRES_USER=usuarioexemplo -e POSTGRES_PASSWORD=senhaexemplo -e POSTGRES_DB=postgresDB postgres`
2. Inicialize o Container com o comando `docker run -d -p 5432:5432 SmashTvTest`
3. Crie um arquivo .env e defina as variáveis da ambiente e valores conforme o arquivo .env.example

### Seed

Para popular o banco de dados inicialmente, você pode usar o arquivo Seed.ts na pasta Prisma.

1. Rode o comando `npm run seed` após a configuração do banco de dados.

## Frontend

Para rodar o Frontend, precisamos instalar as dependencias do projeto listada nos passos acima e executar o script `npm run dev`
