FROM node:14-alpine AS install-dependencies

ENV PORT=3333
ENV PORT_SSR=4000

EXPOSE ${PORT}

WORKDIR /usr/src/app

COPY ["package*.json", "nx.json", "./"]

RUN npm install

COPY . .

RUN npm install -g @angular/cli
RUN npm install -g @nrwl/cli@14.4.1

RUN nx build --prod
CMD nx serve api
