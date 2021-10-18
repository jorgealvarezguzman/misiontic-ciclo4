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
  f_ingreso:{
    type: Date,
    required: true,
  },
  f_salida:{
    type: Date,
  },
  rol:{
    type: String
  },
  h_trabajo:{
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
