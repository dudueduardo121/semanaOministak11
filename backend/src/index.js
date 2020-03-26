const express = require('express');
const cors =  require('cors');
const routes = require('./routes');

const app = express();

// usar antes para enteder que e um objeto json
app.use(cors());
app.use(express.json());
app.use(routes);

//porta que irar ouvir o localhost
app.listen(3333);
