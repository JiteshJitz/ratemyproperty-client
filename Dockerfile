FROM cypress/base
ENV NODE_ENV=docker
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8000 27017
CMD ["npm", "run", "build"]
CMD ["npm", "run", "e2e:headless"]