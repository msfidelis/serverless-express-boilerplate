
const uuid = require('../../../libs/uuid');

exports.seed = (knex, Promise) => {
  return knex('clients').insert([
    {id: undefined, name: 'Matheus Fidelis', email: 'msfidelis01@gmail.com'},
    {id: undefined, name: 'Tarsila Bianca', email: 'tarsila@gmail.com'},
    {id: undefined, name: 'Luke Cage', email: 'luke@gmail.com'},
    {id: undefined, name: 'Jessica Jones', email: 'jessica@gmail.com'},
  ]);
};
