'use strict';

const db = require('../../../libs/knex');

class ClientService {

    constructor() {}

    /**
     * List all database clients
     */
    listClients() {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .select(['id', 'name'])
                .where({active: 1})
                .then(records => {
                    const clients = this._hateoas(records);
                    resolve(clients);
                })
                .catch(err => reject(err));
        });
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
                .then(record => {
                    const client = this._hateoas(record);
                    resolve(client[0])
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Deativate a Client
     * @param {*} id 
     */
    deactivateClient(id) {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .update({active: 0})
                .where({id: id})
                .then(success => resolve(success))
                .catch(err => reject(err));
        });
    };

    /**
     * Update a client using a id
     * @param {*} id 
     * @param {*} client 
     */
    updateClient(id, params) {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .update(params)
                .where({id: id})
                .returning(['id','name', 'email', 'phone'])
                .then(updatedClient => {
                    const client = this._hateoas(updatedClient);
                    resolve(client[0]);
                })
                .catch(err => reject(err));
        });
    };

    /**
     * Detail Clients
     * @param {*} id 
     */
    detailClient(id) {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .select('*')
                .where({id: id, active: 1})
                .then(clientsRaw => {
                    if (clientsRaw.length == 0) reject({status: 404, message: `client ${id} not found`});

                    const clients = this._hateoas(clientsRaw);                    
                    const client = clients[0];
                    resolve(client);
                })
                .catch(err => reject(err))
        });
    };

    /**
     * Delete a client using id
     * @param {*} id 
     */
    deleteClient(id) {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .delete()
                .where({id: id})
                .then(success => resolve(success))
                .catch(err => reject(err));
        });
    };

    /**
     * Create a Hateoas
     * @param {*} clients 
     */
    _hateoas(clients) {
        return clients.map(client => {
            client.actions = {
                detail: {
                    method: "GET",
                    href: `/v1/clients/${client.id}`
                },
                update: {
                    method: "PUT",
                    href: `/v1/clients/${client.id}`
                },
                delete: {
                    method: "DELETE",
                    href: `/v1/clients/${client.id}`
                }
            };
            return client;
        });
    };
    
};

module.exports = new ClientService();