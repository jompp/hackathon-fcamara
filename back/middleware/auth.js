const jwt = require('jsonwebtoken');
const config = require('config');
const { head } = require('request');
const decodeToken = async function(token)
{
    console.log(token)
    try{var data = await jwt.verify(token, process.env.jwtSecret);
        return data;
    
    }catch(e){
        throw Error('Problema ao verificar token!');

    }
}
const autorizar = function(headers){
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
module.exports ={decodeToken,autorizar}