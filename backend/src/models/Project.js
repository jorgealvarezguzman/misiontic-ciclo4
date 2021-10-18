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
  obj_gen:{
    type: String,
    required: true,
  },
  obj_esp:{
    type: [String],
  },
  presupuesto:{
    type: Number,
    required: true,
  },
  f_inicial:{
    type: Date,
    required: true,
    default: Date.now
  },
  f_final:{
    type: Date,
  },
  estado:{
    type: String,
    required: true,
  },
  usuarios: [projectUserSchema] ,
  observaciones: [obsevationAuthor]
}, {collection: 'Proyectos'})


export default mongoose.model('Project', projectSchema);