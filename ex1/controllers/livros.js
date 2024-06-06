const Livro = require('../models/livros');

function compareStrings(a, b) {
  return a.localeCompare(b, undefined, { sensitivity: 'base', ignorePunctuation: true });
}

module.exports.list = async () => {
  return await Livro
    .find()
    .exec();
}

module.exports.findById = id => {
  return Livro
    .findOne({ _id: id })
    .exec();
}

module.exports.findByGenre = genre => {
  return Livro
    .find({ genres: { $in: [genre] } })
    .exec();
}

module.exports.findByCharater = charater => {
  return Livro
    .find({ characters: { $in: [charater] } })
    .exec();
}


module.exports.findDistinctCharater = () => {
  return Livro.distinct('characters').then(characters => {
    return characters.sort(compareStrings);
  });
}

module.exports.findDistinctGenre = () => {
  return Livro.distinct('genres').then(genres => {
    return genres.sort(compareStrings);
  });
}

module.exports.insert = livro => {
    return Livro.create(livro);
}

module.exports.edit = (id, comp) => {
  return Livro.updateOne({_id : id}, comp)
}

module.exports.removeById = id => {
    return Livro.findByIdAndDelete({ _id: id });
  }