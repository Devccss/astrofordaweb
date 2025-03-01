FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias primero
COPY package*.json ./

# Instala las dependencias en modo producción
RUN npm install --production

# Copia todo el proyecto al contenedor
COPY . .

# Construye la aplicación Astro
RUN npm run build

# Expone el puerto 3000
EXPOSE 4321

# Comando para iniciar la aplicación
CMD ["npm", "start"]