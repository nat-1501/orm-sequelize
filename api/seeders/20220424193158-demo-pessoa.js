'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     
     await queryInterface.bulkInsert('Pessoas', [
       {
        nome: 'John Doe',
        ativo: true,
        email: 'joe@joe.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        nome: 'Mariana queiroz',
        ativo: false,
        email: 'mariana@joe.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mario Silva',
        ativo: true,
        email: 'mariosilva@joe.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Natali Soares',
        ativo: true,
        email: 'natalisoares@joe.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nome: 'Marcio Soares',
        ativo: true,
        email: 'marciosoares@joe.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nome: 'Amanda Soares',
        ativo: true,
        email: 'amandasoares@joe.com.br',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nome: 'Aylla Soares',
        ativo: false,
        email: 'ayllasoares@joe.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        nome: 'Nilda Gonçalves da Silva',
        ativo: true,
        email: 'nildagoncalves@joe.com.br',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
     ], {})      
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
}
