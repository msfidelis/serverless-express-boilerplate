'use strict';

const service = require('../services/client-knex');

/**
 * Listing Clients
 * @param {*} req 
 * @param {*} res 
 */
module.exports.list = (req, res) => {
    service.listClients()
        .then(clients => {
            res.status(200).send(clients)
        })
        .catch(err => {
            const status    = err.status  || 500;
            const message   = err.message || err;
            const response  = {status: status, message: message};
            res.status(status).send(response);
        });
}

/**
 * Detail a Client
 * @param {*} req 
 * @param {*} res 
 */
module.exports.detail = (req, res) => {
    const id = req.params.id;
    service.detailClient(id)
        .then(client => res.status(200).send(client))
        .catch(err => {
            const status    = err.status  || 500;
            const message   = err.message || err;
            const response  = {status: status, message: message};
            res.status(status).send(response);
        });
}

/**
 * Create a new client
 * @param {*} req 
 * @param {*} res 
 */
module.exports.create = (req, res) => {
    service.createClient(req.body)
        .then(client => res.status(201).send(client))
        .catch(err => {
            const status    = err.status  || 500;
            const message   = err.message || err;
            const response  = {status: status, message: message};
            res.status(status).send(response);
        });
}

/**
 * Update a client using a id
 * @param {*} req 
 * @param {*} res 
 */
module.exports.update = (req, res) => {
    const id    = req.params.id;
    const body  = req.body;
    service.updateClient(id, body)
        .then(client => {
            console.log(client);
            res.status(200).send(client);
        })
        .catch(err => {
            console.log(err);
            const status    = err.status  || 500;
            const message   = err.message || err;
            const response  = {status: status, message: message};
            res.status(status).send(response);
        });
}

/**
 * Delete a client using an id
 * @param {*} req 
 * @param {*} res 
 */
module.exports.delete = (req, res) => {
    const id = req.params.id;
    service.deactivateClient(id)
        .then(success => {
            res.status(204).send({});
        })
        .catch(err => {
            console.log(err);
            const status    = err.status  || 500;
            const message   = err.message || err;
            const response  = {status: status, message: message};
            res.status(status).send(response);
        });
}