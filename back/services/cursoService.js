const Conteudo = require('../models/Conteudo');
const Curso = require('../models/Curso');
const TrilhaService = require('../services/trilhaService');
exports.getOneCurso = async function (body) {
  try {
    let curso = await Curso.findOne({ titulo: body.titulo });
    return curso;
  } catch (e) {
    throw Error('Error while finding curso');
  }
};

exports.create = async function (body) {
  try {
    let curso = new Curso(body);
    await curso.save();
    return;
  } catch (e) {
    throw Error('Error while creating curso');
  }
};

exports.addTrilha = async function (trilha, curso) {
  const trilha_id = trilha[0]._id;
  try {
    let cursoAtualizar = new Curso();
    cursoAtualizar = await Curso.find({ titulo: curso });
    cursoAtualizar[0].trilhas = [...cursoAtualizar[0].trilhas, trilha_id];
    await cursoAtualizar[0].save();
  } catch (e) {
    throw Error('Error while creating curso');
  }
};

exports.getAll = async function () {
  try {
    let todosCursos = await Curso.find();
    // for (let curso of todosCursos) {
    //   const trilhas = await TrilhaService.getTrilhaByIds(curso.trilhas);
    //   console.log(curso);
    //   curso['trilhas'] = trilhas;
    //   //   Object.assign('trilhas', trilhas);
    //   todosCursos = [
    //     ...todosCursos.filter((aux) => aux.id !== curso.id),
    //     curso,
    //   ];
    // }
    return todosCursos;
  } catch (e) {
    throw Error('Error while finding cursos');
  }
};

exports.getCursoById = async function (query, page, limit) {
  try {
    var curso = Curso.findById(query).select('-password');
    return curso;
  } catch (e) {
    // Log Errors
    throw Error('Error while Finding Curso');
  }
};

exports.updateCurso = async function (id, body) {
  try {
    var curso = await Curso.findByIdAndUpdate(id, body, { new: true });
    return curso;
  } catch (e) {
    // Log Errors
    throw Error('Error while Finding Curso');
  }
};
