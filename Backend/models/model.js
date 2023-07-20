module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("accounts", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Account;
  };