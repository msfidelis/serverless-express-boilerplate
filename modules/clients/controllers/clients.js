'use strict';

const service = require('../services/client-knex');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.list = (req, res) => {
    res.status(200).send({message:"listing"});
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.detail = (req, res) => {
    res.status(200).send({message:"detail"});
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