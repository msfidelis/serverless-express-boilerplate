'use strict';

/**
 * Create a Clients Table
 * @param {*} knex 
 * @param {*} Promise 
 */
exports.up = function(knex, Promise) {
    return Promise.all([
		knex.schema.createTable('clients', (table) => {
  			table.increments('id').primary()
  			table.string('name').notNullable()
            table.string('email')
            table.string('phone')
  			table.timestamps()
 		 })
	]);
};

/**
 * Drop a Clients Table
 * @param {*} knex 
 * @param {*} Promise 
 */
exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('clients')
    ]);
};
