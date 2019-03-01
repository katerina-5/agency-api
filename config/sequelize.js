const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '12345', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize. Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Sequelize. Unable to connect to the database:', err);
  });

module.exports = sequelize;
