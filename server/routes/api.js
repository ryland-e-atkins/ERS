const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
// Set up connection to database
const sequelize = new Sequelize('ERS_DB', 'ers_user', 'aGoodPassword', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;