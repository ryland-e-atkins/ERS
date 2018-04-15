// Import the required module
const Sequelize = require('sequelize');
const sequelize = undefined;

function getConnection () {  
    // Check for connection. If none, connect.
    if(sequelize !== undefined){
        return sequelize;
    } else {
        // Connect to the database
        console.log('Initializing..');
        const sequelize = new Sequelize({
            database: 'ERS_DB',
            username: 'ers_user',
            password: 'aGoodPassword',
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
            freezeTableName: true,
            pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
            },
        });
        console.log('Testing connection..');
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            return undefined;
        });
        console.log('Building models..');
        buildModels(sequelize);
        return sequelize;
    }
};

function buildModels(sequelize) {
    const Users = sequelize.define('ERS_USERS', {
        ERS_USERS_ID: {
            type: Sequelize.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        ERS_USERNAME: {
            type: Sequelize.STRING
        },
        ERS_PASSWORD: {
            type: Sequelize.STRING
        },
        USER_FIRST_NAME: {
            type: Sequelize.STRING
        },
        USER_LAST_NAME: {
            type: Sequelize.STRING
        },
        USER_EMAIL: {
            type: Sequelize.STRING
        }},
        {
            freezeTableName: true,
            createdAt: false,
            updatedAt: false
        }
    );

    const Tickets = sequelize.define('ERS_REIMBURSEMENT', {
        REIMB_ID: {
            type: Sequelize.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        REIMB_AMOUNT: {
            type: Sequelize.FLOAT
        },
        REIMB_SUBMITTED: {
            type: Sequelize.DATE
        },
        REIMB_RESOLVED: {
            type: Sequelize.DATE
        },
        REIMB_DESCRIPTION: {
            type: Sequelize.STRING
        },
        REIMB_RECIEPT: {
            type: Sequelize.BLOB
        },
        REIMB_AUTHOR: {
            type: Sequelize.STRING
        },
        REIMB_RESOLVER: {
            type: Sequelize.STRING
        },
        REIMB_STATUS: {
            type: Sequelize.STRING
        }
    });
}

function closeConnection(connection) {
    connection.close().then(() => 
        console.log('shut down gracefully')
    );
}

module.exports.openCon = getConnection;
module.exports.closeCon = closeConnection;
