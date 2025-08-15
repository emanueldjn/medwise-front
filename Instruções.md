# Backend 
````
1. Inicializar o projeto Node
npm init -y

2. Instalar as dependências
npm install express cors dotenv jsonwebtoken bcrypt prisma @prisma/client
--------------------------------------------------
express → cria a API HTTP
cors → libera requisições de outros domínios (frontend)
dotenv → lê variáveis de ambiente do .env
jsonwebtoken → gera tokens JWT (login)
bcrypt → criptografa senhas
prisma e @prisma/client → ORM para acessar PostgreSQL

--------------------------------------------------

3. Iniciar Prisma
npx prisma init

4.Configurar o .env
Edite o .env que o Prisma criou e coloque sua conexão do Neon:
DATABASE_URL="postgresql://neondb_owner:npg_KA1RCQtsbP5J@ep-sweet-truth-a2qy31ds-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
JWT_SECRET="minha_chave_super_secreta"

5. Criar schema do prisma

6.Criar tabelas no banco:
npx prisma migrate dev --name init

7. Criar servidor (src/index.js)
````

npx prisma studio = visualizar db