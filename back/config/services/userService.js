const User = require('../../models/User')
const bcrypt = require('bcrypt')


exports.getUserById = async function (query, page, limit) {

    try {
        var user = User.findById(query).select('-password')
        return user;
    } catch (e) {
        // Log Errors
        throw Error('Error while Finding User')
    }
}

exports.getOneUser = async function(body){
   try{
    let user = await User.findOne({body});
return user
   }catch(e){
    throw Error('Error while finding user')
   }  
}
exports.create = async function (body){
    try{
       let user = new User(body)
const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
    }catch(e){
        throw Error("Error while creating user")
    }
}