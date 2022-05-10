const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
  constructor(){
    super('Pessoas')
    this.matriculas = new Services('Matriculas')
  }
}