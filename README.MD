# SmashTV

Bem-vindo ao SmashTV, uma aplicação web para assistir jogos esportivos ao vivo!
![Mockup](https://raw.githubusercontent.com/chrishenderson07/smt/main/public/Mockup%20SmashTV.png)

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
1. Rode um novo Container do Docker

```bash
  bash docker run --name SmashTvTest -p 5432:5432
  -e POSTGRES_USER=usuarioexemplo -e POSTGRES_PASSWORD=senhaexemplo
  -e POSTGRES_DB=postgresDB postgres
```

2. Inicialize o Container com o comando `docker run -d -p 5432:5432 SmashTvTest`
3. Crie um arquivo .env e defina as variáveis da ambiente e valores conforme o arquivo .env.example

### Model

Documentação do Schema de Modelos

#### Model: Video

- **id**: Identificador único do vídeo.
- **title**: Título do vídeo.
- **description**: Descrição do vídeo.
- **sport**: Esporte associado ao vídeo.
- **sportId**: ID do esporte associado.
- **highlights**: Destaques do vídeo.
- **youtubeId**: ID do vídeo no YouTube (opcional).
- **tournament**: Torneio associado ao vídeo (opcional).
- **tournamentId**: ID do torneio associado (opcional).
- **arena**: Arena associada ao vídeo (opcional).
- **arenaId**: ID da arena associada (opcional).

#### Model: Sport

- **id**: Identificador único do esporte.
- **name**: Nome do esporte.
- **description**: Descrição do esporte.
- **videos**: Lista de vídeos associados ao esporte.
- **teachers**: Lista de professores associados ao esporte.

#### Model: Tournament

- **id**: Identificador único do torneio.
- **title**: Título do torneio.
- **description**: Descrição do torneio.
- **location**: Localização do torneio.
- **sportId**: ID do esporte associado.
- **videos**: Lista de vídeos associados ao torneio.
- **arenas**: Lista de arenas associadas ao torneio.
- **date**: Data do torneio (opcional).

#### Model: Arena

- **id**: Identificador único da arena.
- **title**: Título da arena.
- **location**: Localização da arena.
- **information**: Informações adicionais sobre a arena (opcional).
- **videos**: Lista de vídeos associados à arena.
- **tournaments**: Lista de torneios associados à arena.

#### Model: Teacher

- **id**: Identificador único do professor.
- **name**: Nome do professor.
- **email**: Endereço de e-mail do professor (único).
- **description**: Descrição do professor (opcional).
- **formation**: Formação acadêmica do professor.
- **phoneNumber**: Número de telefone do professor.
- **facebook**: Perfil do Facebook do professor (opcional).
- **whatsapp**: Número de WhatsApp do professor (opcional).
- **messenger**: ID do Messenger do professor (opcional).
- **instagram**: Perfil do Instagram do professor (opcional).
- **sports**: Lista de esportes associados ao professor.

### Seed

Para popular o banco de dados inicialmente, você pode usar o arquivo Seed.ts na pasta Prisma.

1. Rode o comando `npm run seed` após a configuração do banco de dados.

## Frontend

Para rodar o Frontend, precisamos instalar as dependencias do projeto listada nos passos acima e executar o script `npm run dev`
