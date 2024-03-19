# Use a imagem base do Node.js 18
FROM node:18

# Instale o PostgreSQL
RUN apt-get update && apt-get install -y postgresql

# Copie os arquivos da sua aplicação para o diretório de trabalho
COPY . .

# Defina o diretório de trabalho
WORKDIR /app

# Instale as dependências da aplicação
RUN npm install

# Exponha a porta da aplicação
EXPOSE 3000

# Defina o comando de inicialização da aplicação
CMD ["npm", "start"]