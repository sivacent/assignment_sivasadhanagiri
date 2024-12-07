import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const SupplementSchema = new mongoose.Schema({
name: {
type: String,
trim: true,
required: 'Name is required'
},
description: {
type: String,
trim: true,
required: 'Description is required'
},
created: {
type: Date,
default: Date.now
},
updated: {
type: Date,
default: Date.now
},
hashed_password: {
type: String,
},
salt: String
});
// SupplementSchema.virtual('password')
// .set(function(password) {
// this._password = password;
// //this.salt = this.makeSalt();
// this.hashed_password = password;
// //this.hashed_password = this.encryptPassword(password);
// })
// .get(function() {
// return this._password;
// });
// SupplementSchema.path('hashed_password').validate(function(v) {
// if (this._password && this._password.length < 6) {
// this.invalidate('password', 'Password must be at least 6 characters.');
// }
// }, null);
//module.exports = mongoose.model('Supplement', SupplementSchema);
export default mongoose.model('Supplement', SupplementSchema);
