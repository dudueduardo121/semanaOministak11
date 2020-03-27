const express = require('express');
const cors =  require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

// usar antes para enteder que e um objeto json
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
//porta que irar ouvir o localhost

module.exports = app;
