'use strict'

const Sequelize = require('sequelize');
const env =  require('./env');

const sequelize = new Sequelize({
    database: 'ERS_DB',
    username: 'ers_user',
    password: 'aGoodPassword',
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    freezeTableName: true
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/user.js')(sequelize, Sequelize);
db.reimbForms = require('../models/reimbursement.js')(sequelize, Sequelize);

db.reimbForms.belongsTo(db.users);
db.users.hasMany(db.reimbForms);

module.exports = db;
