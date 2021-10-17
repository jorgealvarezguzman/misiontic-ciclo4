const mongoose = require('mongoose');

export const projectUserSchema = mongoose.Schema({
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
  },
})
