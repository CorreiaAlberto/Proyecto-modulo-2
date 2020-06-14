const {Schema,model} = require('mongoose')

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: [true, "El nombre de usuario es requerido :) ."],
    unique: true
  },
  email: {
    type: String,
    required: [true, "El email es requerido :) ."],
    //asegurar formato email desde el servidor
    match: [/^\S+@\S+\.\S+$/, 'Dirección de correo inválida, revise su dirección de correo :) .'],
    unique: true,
    lowercase: true,
    trim: true
  },
  //Password property 
  passwordHash: {
    type: String,
    required: [true, "La contraseña es un campo requerido :) ."]
  },
  restaurantes: [String]
})

module.exports = model('Usuario', usuarioSchema)