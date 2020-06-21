//Esquema del menú
const {Schema, model} = require('mongoose');

const menuSchema = new Schema({
  nombreMenu: String,
  idRestaurante: String,
})

module.exports = model('Menu', menuSchema)