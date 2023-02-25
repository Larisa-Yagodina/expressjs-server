import express from 'express';
import dbConnect from '../src/modules/core/db.js';
import logger from '../src/modules/core/logger.js';
import parseResponse from '../src/modules/core/parseResponse.js';
import cors from '../src/modules/core/cors.js';
import routes from '../src/modules/core/routes.js';
import errorHandler from '../src/modules/errorHandler.js';

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

// babel src/index3.js -d lib


// for PACKAGE.JSON "start": "nodemon --inspect --exec babel-node src/index3.js",