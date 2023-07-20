const db = require('../models');
const Account = db.accounts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    const account = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password 
    };

    Account.create(account)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred."
        });
      });
  };

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: `${name}`} : null; 

    Account.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      });
  };

exports.delete = (req, res) => {
  const id = req.params.id;
  
  Account.destroy({
      where: { id: id }
  })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Login was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete the log in details with id=${id}. Maybe the user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete the user with id=" + id
        });
      });
  };

exports.deleteAll = (req, res) => {
    Account.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      });
  };