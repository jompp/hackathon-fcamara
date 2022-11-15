const Trilha = require('../models/Trilha');
const Curso = require('../models/Curso');

exports.getTrilhaByTitulo = async function (body) {
  try {
    let trilha = await Trilha.find({ titulo: body.titulo });

    return trilha;
  } catch (e) {
    throw Error('Error while finding trilha');
  }
};

exports.create = async function (body) {
  try {
    let trilha = new Trilha(body);
    await trilha.save();
    return 'Trilha criada!';
  } catch (e) {
    throw Error('Error while creating trilha');
  }
};

exports.addConteudo = async function (trilha, conteudo) {
  try {
    let trilhaAtualizar = new Trilha();
    trilhaAtualizar = await Trilha.find({ titulo: trilha });
    trilhaAtualizar[0].conteudos = [
      ...trilhaAtualizar[0].conteudos,
      conteudo._id,
    ];

    trilhaAtualizar[0].tempo_estimado =
      trilhaAtualizar[0].tempo_estimado + conteudo.duracao;
    await trilhaAtualizar[0].save();
    return 'Conteúdo adicionado na trilha';
  } catch (e) {
    console.log(e);
    throw Error('Error while creating trilha');
  }
};

exports.getById = async function (query, page, limit) {
  try {
    var user = await Trilha.findById(query);
    return user;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error('Error while Finding Trilha');
  }
};

exports.getAll = async function () {
  try {
    let allTrilhas = await Trilha.find();
    return allTrilhas;
  } catch (e) {
    throw Error('Error while finding cursos');
  }
};

exports.getTrilhaByIds = async function (idTrilhas) {
  try {
    let trilhas = await Trilha.find({ _id: { $in: idTrilhas } });
    return trilhas;
  } catch (e) {
    throw Error('Error while finding trilha');
  }
};

exports.deleteTrilha = async function (id) {
  try {
    let trilha = await Trilha.deleteOne({ _id: id });
    return trilha;
  } catch (e) {
    console.log(e);
    throw Error('Error while finding trilha');
  }
};

exports.updateTrilha = async function (id, body) {
  try {
    let trilha = await Trilha.findByIdAndUpdate(id, body, { new: true });;
    return trilha;
  } catch (e) {
    console.log(e);
    throw Error('Error while finding trilha');
  }
};

