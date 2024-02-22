var express = require('express');
var router = express.Router();
const Personaje = require('../models/personaje');

router.get('/personaje/todos', async (req, res) => {
  try {
    const personajes = await Personaje.find({}, 'name gender image url created');
    res.render('index', { personajes });
  } catch (error) {
    res.status(500).send('Error al obtener la lista de TODOS personajes.');
  }
});

router.get('/', async (req, res) => {
  try {
    const personajes = await Personaje.find({}, 'name gender image url created');
    res.render('index', { personajes });
  } catch (error) {
    res.status(500).send('Error al obtener la lista de TODOS personajes.');
  }
});

module.exports = router;
