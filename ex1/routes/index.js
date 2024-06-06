var express = require('express');
var router = express.Router();
const Livro = require('../controllers/livros');

/* GET home page. */
router.get('/', function(req, res) {
  const genre = req.query.genre;
  const charater = req.query.charater;
  if(genre){
    Livro.findByGenre(genre)
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
  }
  else if (charater){
    Livro.findByCharater(charater)
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
  }
  else{
    Livro.list()
          .then(data => res.jsonp(data))
          .catch(erro => res.jsonp(erro))
  }
});


router.get('/genres', function(req, res) {
  Livro.findDistinctGenre()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.get('/characters', function(req, res) {
  Livro.findDistinctCharater()
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});

router.get('/:id', function(req, res) {
  Livro.findById(req.params.id)
      .then(data => res.jsonp(data))
      .catch(erro => res.jsonp(erro))
});


router.post('/', function(req, res) {
  Livro.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(522).jsonp(erro))
});

router.put('/:id', function (req, res) {
  Livro.edit(req.params.id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(523).jsonp(erro))
});


router.delete('/:id', function(req, res) {
  return Livro.removeById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.status(524).jsonp(erro))
});

module.exports = router;