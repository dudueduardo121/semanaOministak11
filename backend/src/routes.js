const express = require('express');

const ongController = require('./controllers/OngController');
const casosController = require('./controllers/casosController');
const profileControler = require('./controllers/profileControler');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

// Ongs
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/login', sessionController.create);

routes.get('/profile', profileControler.index);
// casos
routes.get('/casos', casosController.index);
routes.post('/casos', casosController.create);
routes.delete('/casos/:id', casosController.delete);




module.exports = routes;