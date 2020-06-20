const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Restaurante = require('../models/modelo-restaurante');

//Ruta POST crear restaurante
router.post('/restaurante', async (req, res, next) => {
  try{
    const { nombre, calle, numero, horario } = req.body;
    const userId = req.session.currentUser;
    const numeroRestaurantes = await Restaurante.find();
    let pin=1000;
    if (numeroRestaurantes.length != 0) {
      let ordenados=numeroRestaurantes.sort((a, b)=>a.pin-b.pin);
      let total= ordenados.length;
      let mayor=ordenados[total-1];
      pin= mayor.pin+1;
    }
    const nuevoRestaurante = await Restaurante.create({
      nombre: nombre,direccion: {calle: calle,numero: numero},
      horario: horario,
      userId: userId,
      pin:pin
    })
    console.log(nuevoRestaurante)
    res.redirect('/user-profile')
  }
  catch(err){
    next(err)
  }
})

// router.post('/api/restaurante/:id/editar', async (req,res,next)=>{
//  const restauEditado= await Restaurante.findByIdAndUpdate(req.params.id,{nombre:req.body.nombre})
//   res.json({resultado:restauEditado})
// })


module.exports = router;