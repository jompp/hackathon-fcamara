require('dotenv/config')
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const gravatar = require('gravatar');
const UserService = require('../../back/services/userService');
const CursoService = require('../../back/services/cursoService')
const create = async (req, res, next) => {
  check('name', 'Name is required').not().isEmpty();
  check('email', 'Informe um email válido').isEmail();
  check('password', 'Por favor, senhas com 6 caracteres minímo').isLength({
    min: 6,
  });

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    let user = await UserService.userExists(email);
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists!' }] });
    }

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    });
    user = await UserService.create({
      name,
      email,
      avatar,
      password,
    });
    return res.json(user);
    // const payload = {
    //     user: {
    //         id: user.id,
    //     }
    // }
    // jwt.sign(payload, process.env.JWT_SECRET, {
    //     expiresIn: 360000
    // }, (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    // })
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
};

const getAll = async (req, res, next) => {
  const users = await UserService.getUsers();
  return res.json(users);
};
const get = async (req, res, next) => {
  const userId = req.params.id;
  const user = await UserService.getUserById({ _id: userId });
  return res.json(user);
};

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { body } = req;
    const user = await UserService.updateUser(userId, body);
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userExists = await UserService.userExists(userId);
    if (!userExists) {
      return res.status(400).json({ errors: [{ msg: 'User not exists!' }] });
    }
    await UserService.deleteUser(userId);
    return res.status(204).send();
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
};
const novoCurso = async (req,res,next)=>{
  const {id_user, id_curso}= req.body;
  try{
    let curso = await CursoService.getCursoById(id_curso)
    if(curso){
      let body = {id_curso:id_curso}
        let user = await  UserService.novoCurso(id_user, body)
    
        res.status(200).send(user)
        return
    }else{
        res.status(400).json({errors:[{msg:'Curso não encontrado!'}]})
        return
    }
  }catch(err){
      console.error(err.message)
      res.status(500).send('Server error')
  }
}

module.exports = { create, getAll, updateUser, get, deleteUser , novoCurso};
