'use strict';

const service = require('../services/client-knex');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.list = (req, res) => {
    service.listClients()
        .then(clients => res.status(200).send(clients))
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.detail = (req, res) => {
    const id = req.params.id;
    service.detailClient(id)
        .then(client => {
            res.status(200).send(client)
        })
        .catch(err => {
            const status    = err.status  || 500;
            const message   = err.message || err;
            const response  = {status: status, message: message};
            res.status(status).send(response);
        })
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.create = (req, res) => {
    service.createClient(req.body)
        .then(client => res.status(201).send(client));
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.update = (req, res) => {
    res.status(200).send({message:"update"});
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.delete = (req, res) => {
    res.status(200).send({message:"delete"});
}