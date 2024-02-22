const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
    id:Number,
    name:String,
    gender:String,
    image:String,
    url:String,
    created:String
});

const Personaje = mongoose.model('personaje', personajeSchema);
module.exports = Personaje;

