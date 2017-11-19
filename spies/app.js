const db = require('./db');

module.exports.handleSignup = (email,password) =>{
// check if email already exists in db
// save the user object in db
db.saveUser({email,password});
// send a welcome email to user
}; 