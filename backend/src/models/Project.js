const mongoose = require('mongoose');
import {obsevationAuthor} from './submodels/Model'

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
    default: Date.now
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
  observaciones:{
    type:  [obsevationAuthor]
  }
})

export default mongoose.model('Project', projectSchema);