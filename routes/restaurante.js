const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Restaurante = require('../models/modelo-restaurante');
//OJO!!!
// router.get('/restaurante',(req,res,next)=>{
//   Restaurante.find()
//   .then(restaurante=>{
//     res.render('restaurante/restaurante',{restaurante:restaurante})
//   })
//   .catch(e=>console.log(e))
// })

//Ruta POST crear restaurante
router.post('/restaurante', (req, res, next) => {
  const {
    nombre,
    calle,
    numero,
    horario
  } = req.body;
  const userId = req.session.currentUser;
  Restaurante.create({
      nombre: nombre,
      direccion: {
        calle: calle,
        numero: numero
      },
      horario: horario,
      userId: userId
    })
    .then(restaurante => {
      console.log(restaurante)
      res.redirect('/user-profile')
    })
    .catch(error => console.log(error))
})


module.exports = router;