# Dockerfile
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto en el que se ejecutará el servidor
EXPOSE 5000

# Iniciar el servidor
CMD ["node", "server.js"]

