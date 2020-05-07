 var express = require('express');
var router = express.Router();
const CadastroController = require('../controllers/CadastroController');
//const upload = require("../lib/upload");

/* GET home page. */
router.get('/cadastro', CadastroController.cadastro);



module.exports = router;






//const VerificaSeEstaLogado = require('../middlewares/VerificaSeEstaLogado');
/*
router.get('/cadastro/busca/', CadastroController.search);
router.get('/cadastro/create', VerificaSeEstaLogado, CadastroController.create);
router.get('/cadastro', VerificaSeEstaLogado, CadastroController.list);
router.post('/cadastro', VerificaSeEstaLogado, upload.single("img"), CadastroController.store);
router.get('/cadastro/:id', CadastroController.show);
router.delete('/cadastro/:id', VerificaSeEstaLogado, CadastroController.delete);
router.get('/cadastro/:id/edit', VerificaSeEstaLogado, CadastroController.edit);
router.put('/cadastro/:id/update', VerificaSeEstaLogado, upload.single("img"), CadastroController.update);
*/


