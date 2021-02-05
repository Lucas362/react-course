const mongoose = require('mongoose');
mongoose.Promise = global.Promise // Só para tirar warning de deprecated
module.exports = mongoose.connect('mongodb://localhost/todo')