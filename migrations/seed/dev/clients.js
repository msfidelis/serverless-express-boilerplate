
const uuid = require('../../../libs/uuid');

exports.seed = (knex, Promise) => {
  return knex('clients').insert([
    {id: 1, name: 'Matheus Fidelis', email: 'msfidelis01@gmail.com'},
    {id: 2, name: 'Tarsila Bianca', email: 'msfidelis01@gmail.com'},
    {id: 3, name: 'Luke Cage', email: 'msfidelis01@gmail.com'}
  ]);
};
