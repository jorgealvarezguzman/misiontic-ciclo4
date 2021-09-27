const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion:{
    type: String,
  },
  objetivo_general:{
    type: String,
    required: true,
  },
  objetivos_especificos:{
    type: [String],
  },
  presupuesto:{
    type: Number,
    required: true,
  },
  fecha_inicio:{
    type: Date,
    required: true,
  },
  fecha_fin:{
    type: Date,
  },
  estado:{
    type: String,
    required: true,
  },
  usuarios:{
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProjectUser'
    }],
  },
  observacion:{
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProjectObservation'
    }],
  },
  creacion: {
    type: Date,
    default: Date.now
  },
})


module.exports = mongoose.model('Project', projectSchema);