FROM node:8.9.4
EXPOSE 8081
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
COPY dist/ /app/dist/
RUN npm run webpack
RUN ls -l
RUN ls -l dist
CMD ["npm", "start"]
