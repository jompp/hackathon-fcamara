const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(headers){
    return new Promise((resolve, reject)=>{
        

    const token = headers['x-auth-token'];
    if(!token){
        return resolve({
            status:401,
            error:"Sem token não é possível autorizar!"
        }) 
    }
    //Verificando token
    try{
const decoded = jwt.verify(token, config.get('jwtSecret'))

return resolve({
    status:200, 
    json:decoded.user
})
    }catch(err){
        return resolve({
            status:401,
            error:"Token não é válido!"
        })
    }
})}
