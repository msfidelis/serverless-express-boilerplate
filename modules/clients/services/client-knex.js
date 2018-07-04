'use strict';

const db = require('../../../libs/knex');

class ClientService {

    constructor() {}

    listClients() {

    }

    /**
     * Paginate Listing
     * @param {*} page 
     */
    paginateClients(page = 1) {
        
    }

    /**
     * Create a new Client
     * {
     *  "name": "",
     *  "email": "",
     *  "phone": ""
     * }
     * @param {*} client 
     */
    createClient(client) {
        return new Promise((resolve, reject) => {
            client.id = undefined;
            db.client('clients')
                .insert(client)
                .returning(['id', 'name', 'email', 'phone'])
                .then(success => resolve(success[0]))
                .catch(err => reject(err));
        });
    }

    /**
     * Update a client using a id
     * @param {*} id 
     * @param {*} client 
     */
    updateClient(id, client) {
        return new Promise((resolve, reject) => {

        });
    }

    /**
     * Detail Clients
     * @param {*} id 
     */
    detailClient(id) {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .select('*')
                .where({id: id})
                .then(client => resolve(client[0]))
                .catch(err => reject(err))
        });
    }

    deleteClient(id) {
        return new Promise((resolve, reject) => {

        });
    }

}

module.exports = new ClientService();