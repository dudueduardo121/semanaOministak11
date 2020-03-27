const express = require('express');
// Validação
const { celebrate, Segments, Joi } = require ('celebrate');
 
const ongController = require('./controllers/OngController');
const casosController = require('./controllers/casosController');
const profileControler = require('./controllers/profileControler');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

/* ONGS */
routes.get('/ongs', ongController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),ongController.create);


/*LOGIN SESSION*/
routes.post('/login', sessionController.create);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    }),

}) ,profileControler.index);


/*CASOS*/

routes.get('/casos', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),casosController.index);

routes.post('/casos', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    }),


}),casosController.create);


routes.delete('/casos/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),casosController.delete);




module.exports = routes;