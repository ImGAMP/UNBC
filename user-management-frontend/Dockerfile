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

# Compilar la aplicación para producción
RUN npm run build

# Instalar un servidor estático para servir el contenido 
RUN npm install -g serve

# Exponer el puerto
EXPOSE 3000

# Iniciar el servidor estático
CMD ["serve", "-s", "build"]

