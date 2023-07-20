module.exports = app => {

const accounts = require('../controllers/controller.js');

var router = require('express').Router();

router.post('/', accounts.create);

router.get('/', accounts.findAll);

router.delete("/:id", accounts.delete);

router.delete("/", accounts.deleteAll)

app.use('/accounts', router);

};