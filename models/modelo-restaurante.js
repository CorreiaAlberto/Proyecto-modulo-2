const { Schema, model } = require('mongoose')

const restauranteSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: true
  },
  direccion: {
    calle: {
      type: String,
      trim: true,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
  },
  horario: String,
  menu: [String],
  // logo:
  // {
  //   data: Buffer,
  //   contentType: String
  // },
  userId: String
})

module.exports = model('Restaurante', restauranteSchema)