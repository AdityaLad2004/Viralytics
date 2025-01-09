
FROM node:18-alpine AS frontend


WORKDIR /app/frontend


COPY client/package*.json ./


RUN npm install


COPY client ./ 


RUN npm run build

# Stage 2: Build backend
FROM node:18-alpine AS backend


WORKDIR /app/backend


COPY server/package*.json ./


RUN npm install


COPY server ./ 


EXPOSE 3000


CMD ["node", "server.js"]
