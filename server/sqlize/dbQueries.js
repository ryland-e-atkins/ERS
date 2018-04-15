// Import db connection
const sqlz = require('./dbConnect.js');
// Validate connection
const connection = sqlz.openCon();
// Get the correct model
const Users = connection.model('ERS_USERS');
// Find one user
Users.findOne({ where: { ERS_USERS_ID: 13 } }).then(user => {
    const usr = user.get({plain: true});
    console.log("User ID: " + usr.ERS_USERS_ID);
    console.log("Username: " + usr.ERS_USERNAME);
    console.log("First Name: " + usr.USER_FIRST_NAME);
    console.log("Last Name: " + usr.USER_LAST_NAME);
})