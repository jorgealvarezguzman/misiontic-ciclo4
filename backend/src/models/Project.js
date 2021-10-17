const mongoose = require('mongoose');
import { projectUserSchema, obsevationAuthor } from "./submodels/Model";

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
  usuarios: [projectUserSchema] ,
  observaciones: [obsevationAuthor]
})


export default mongoose.model('Project', projectSchema);