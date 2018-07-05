'use strict';

const db = require('../../../libs/knex');

class ClientService {

    constructor() {}

    listClients() {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .select(['id', 'name'])
                .where({active: 1})
                .then(records => {
                    resolve(records.map(record => {
                        record.actions = {
                            detail: {
                                method: "GET",
                                href: `/v1/clients/${record.id}`
                            },
                            update: {
                                method: "PUT",
                                href: `/v1/clients/${record.id}`
                            },
                            delete: {
                                method: "DELETE",
                                href: `/v1/clients/${record.id}`
                            }
                        };
                        return record;
                    }))
                })
                .catch(err => reject(err));
        });
    }

    /**
     * Paginate Listing
     * @param {*} page 
     */
    paginateClients(page = 1) {
        return new Promise((resolve, reject) => {
            db.client('clients')
                .select(['id', 'name'])
                .then(records => {
                    resolve(records.map(record => {
                        record.actions = {
                            detail: {
                                method: "GET",
                                href: `/v1/clients/${record.id}`
                            },
                            update: {
                                method: "PUT",
                                href: `/v1/clients/${record.id}`
                            },
                            delete: {
                                method: "DELETE",
                                href: `/v1/clients/${record.id}`
                            }
                        };
                        return record;
                    }))
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
                .then(success => resolve(success[0]))
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
    updateClient(id, client) {
        return new Promise((resolve, reject) => {

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
                .then(clients => {

                    if (clients.length == 0) reject({status: 404, message: `client ${id} not found`});
                    
                    const client = clients[0];

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

                    resolve(client);
                })
                .catch(err => reject(err))
        });
    }

    deleteClient(id) {
        return new Promise((resolve, reject) => {

        });
    }

}

module.exports = new ClientService();