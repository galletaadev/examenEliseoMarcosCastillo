var express = require('express');
var router = express.Router();
const Personaje = require('../models/personaje');

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const personajes = await Personaje.find({id:id}, 'id name gender image url created');
    console.log(personajes);
    res.render('personajes', {personajes});
  } catch (error) {
    res.status(500).send('Error al obtener al filtrar la id.');
  }
});

module.exports = router;