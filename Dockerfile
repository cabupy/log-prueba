FROM node:10

WORKDIR /home/node/app
# Seteamos las variables de entorno
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
ENV PORT=3000
ENV TINI_VERSION v0.18.0

ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini ./tini
RUN chmod +x ./tini

COPY package.json .
RUN npm install --production

COPY . .

#RUN groupadd -r nodejs && useradd -m -r -s /bin/bash -g nodejs nodejs
#USER nodejs

RUN mkdir logs
RUN chown -R node:node /home/node

# Ejecutamos como usuario node.
USER node

ENTRYPOINT ["./tini", "--"]
CMD ["node", "index.js"]
