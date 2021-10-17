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

export const obsevationAuthor = mongoose.Schema({
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

const ProjectUser = mongoose.model('ProjectUser', projectUserSchema);
const ProjectObservation = mongoose.model('ProjectObservation', projectObservationSchema);
const ObservationAuthor = mongoose.model('ObservationAuthor', obsevationAuthor);

module.exports = {ProjectUser, ProjectObservation, ObservationAuthor}