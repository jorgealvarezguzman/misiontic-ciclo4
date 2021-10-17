const mongoose = require('mongoose');

const projectUserSchema = mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required: true
  },
  nombre: {
    type: String,
    required: true,
  },
  fecha_ingreso:{
    type: Date,
    required: true,
  },
  fecha_salida:{
    type: Date,
  },
  rol:{
    type: String
  },
  horas:{
    type:Number
  },
  carrera:{
    type:String
  }
});

const projectObservationSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  fecha_ingreso:{
    type: Date,
    required: true,
  },
  fecha_salida:{
    type: Date,
  },
  rol:{
    type: String
  },
  horas:{
    type:Number
  },
  carrera:{
    type:String
  }
})

const obsevationAuthor = mongoose.Schema({
  autorId: {
    type:mongoose.Schema.Types.ObjectId,
    required: true
  },
  texto: {
    type: String
  },
  fecha: {
    type: Date,
    default: Date.now
  },
})

let ProjectUser = mongoose.model('ProjectUser', projectUserSchema);
let ProjectObservation = mongoose.model('ProjectObservation', projectObservationSchema);
let ObservationAuthor = mongoose.model('ObservationAuthor', obsevationAuthor);

module.exports = {ProjectUser, ProjectObservation, ObservationAuthor}
