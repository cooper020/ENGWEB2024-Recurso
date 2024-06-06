var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res) {
  var d = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:17000/books')
                    .then(resposta => {
                      res.render('index', { livros: resposta.data, data: d});
                    })
                    .catch( erro => {
                      res.render('error', {error: erro, message: 'Erro ao recuperar os livros'})
                    })
});

router.get('/:id', function(req, res) {
  var d = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:17000/books/'+ req.params.id)
                    .then(resposta => {
                      res.render('livro', { livro: resposta.data, data: d});
                    })
                    .catch( erro => {
                      res.render('error', {error: erro, message: 'Erro ao recuperar o livro'})
                    })
});


function calcularSomatorioLivros(livros) {
  return livros.reduce((total, livro) => {
    const preco = parseFloat(livro.preco.replace(',', '.'));
    return total + preco;
  }, 0);
}


router.get('/authors/:idAutor', function(req, res) {
  var d = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:17000/books?author='+ req.params.idAutor)
    .then(resposta => {
      var totalBooks = calcularTotalLivros(resposta.data);
      res.render('autor', { 
        books: resposta.data, 
        totalBooks, 
        data: d, 
        authorId: resposta.data[0].author[0],
        authorName: resposta.data[0].author[0]
      });
    })
    .catch( erro => {
      res.render('error', {error: erro, message: 'Erro ao recuperar os livros'})
    })
});

module.exports = router;