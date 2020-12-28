 const mongoose = require('mongoose');
 var userSchema = new mongoose.Schema({
     first_name: {type: String, required: true},
     last_name: {type: String, required: true},
     email_address: {type: String, required: true},
     contact_number: {type: String, required: true},
     location: {type: String, required: true},
     name_of_institution: {type:String, required: true},
     institute_type: {type:String, required: true},
     role_in_institution: {type:String, required: true},
     website_link: {type:String, required: true},
     password: {type: String, required: true}
 })

var User = mongoose.model('User', userSchema);
module.exports = User;