import express from 'express';
import dbConnect from './src/modules/core/db';
import logger from './src/modules/core/logger';
import parseResponse from './src/modules/core/parseResponse';
import cors from './src/modules/core/cors';
import routes from './src/modules/core/routes';
import errorHandler from './src/modules/errorHandler';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

dbConnect()
logger(app)
parseResponse(app)
cors(app)
routes(app)
errorHandler(app)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// for package json из видео про babel
// "start": "npm run build && node build",
// "build": "npm run clean && babel src -d build",
// "dev": "nodemon --inspect -r dotenv/config -r babel-register src",

// const j = JSON.stringify(obj) - перевод объекта в JSON
// const z = JSON.parse(j) - перевод обратно в объект

// babel src/index.js -d lib


// for PACKAGE.JSON "start": "nodemon --inspect --exec babel-node src/index.js",
