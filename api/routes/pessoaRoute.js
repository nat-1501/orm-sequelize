const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas) 
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa) 
router.post('/criarpessoas', PessoaController.criaPessoa) 


module.exports = router