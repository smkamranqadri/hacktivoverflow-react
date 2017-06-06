let monggo = require('mongoose'),
    Schema = monggo.Schema;

let userSchema = new Schema({
  email: {type:String,unique: true, required:true},
  username: {type:String,unique: true, required:true},
  password: {type:String, required:true},
  createdAt: {type:Date, default: Date.now}
})

let User = monggo.model('User', userSchema)

module.exports = User;
