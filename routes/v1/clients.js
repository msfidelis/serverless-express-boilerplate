'use strict';

const clientsController = require('../../modules/clients/controllers/clients');

/**
 * Clients Routes
 * @param {*} app 
 */
module.exports = app => {
    app.get('/v1/clients', clientsController.list);
    app.post('/v1/clients', clientsController.create);
    app.get('/v1/clients/:id', clientsController.detail);
    app.put('/v1/clients/:id', clientsController.update);
    app.delete('/v1/clients/:id', clientsController.delete);
}