# Extendemos del cotenedor node version 12
FROM node:12
# Seteamos el directorio de trabajo dentro del contenedor
WORKDIR /home/node/app
# Seteamos las variables de entorno
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
ENV PORT=3000
ENV TINI_VERSION v0.18.0

# Esto agregamos para poder cortar el servicio con Ctrl + X
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini ./tini
RUN chmod +x ./tini

# Copiamos el archivo package.json de nuestro proyecto al WORKDIR
COPY package.json .
# Instalamos todas las dependencias de produccion (no las dev)
RUN npm install --production
# Copiamos nuestro proyecto, menos lo que esta en .dockerignore
COPY . .

#RUN groupadd -r nodejs && useradd -m -r -s /bin/bash -g nodejs nodejs
#USER nodejs

# Creamos un directorio logs en WORKDIR
RUN mkdir logs
# Le asigmamos como owner al usuario node al directorio /home/node
RUN chown -R node:node /home/node

# Ejecutamos como usuario node.
USER node
# ejecutamos el programa tini
ENTRYPOINT ["./tini", "--"]
# ejecutamos el node index.js (podria ser npm run start)
CMD ["node", "index.js"]
# Exponemos el puerto 3000 del contenedor
#EXPOSE 3000
