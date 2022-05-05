'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {

    static associate (models) {
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id'
    })
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    })
  }

  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    }, 
    scopes: {
      todos: { where: {} },
    }
  });
  return Pessoas;
};