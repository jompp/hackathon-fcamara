const Conteudo = require('../models/Conteudo');
exports.getAll = async function () {
  try {
    let conteudo = await Conteudo.find();

    return conteudo;
  } catch (e) {
    throw Error('Error while finding conteudo');
  }
};

exports.getOneConteudo = async function (body) {
  try {
    let conteudo = await Conteudo.findOne(body);

    return conteudo;
  } catch (e) {
    throw Error('Error while finding conteudo');
  }
};

exports.getById = async function (body) {
  try {
    let conteudo = await Conteudo.findById(body._id);

    return conteudo;
  } catch (e) {
    console.log(e);
    throw Error('Error while finding conteudo');
  }
};
exports.create = async function (body) {
  try {
    let conteudo = new Conteudo(body);
    conteudo = await conteudo.save();
    return conteudo;
  } catch (e) {
    console.log(e);
    throw Error('Error while creating conteudo');
  }
};

exports.deleteConteudo = async function (id) {
  try {
    let conteudo = await Conteudo.deleteOne({ _id: id });

    return conteudo;
  } catch (e) {
    console.log(e);
    throw Error('Error while finding conteudo');
  }
};

exports.atualizarConteudo = async function (id, body) {
  try {
    let conteudo = await Conteudo.findByIdAndUpdate(id, body, { new: true });

    return conteudo;
  } catch (e) {
    console.log(e);
    throw Error('Error while finding conteudo');
  }
};
