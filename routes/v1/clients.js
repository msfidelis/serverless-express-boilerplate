'use strict';

module.exports = app => {
    app.get('/clients', (req, res) => {
        res.status(200).send({message: 'loko'});
    })
}