const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(email) {
        var re = /^(([^<>()\[\]\\.,;:ñÑ\s@"]+(\.[^<>()\[\]\\.,;:ñÑ\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
    },
  },
  hashed_password: {
    type: String,
    required: true,
    minlength: 59
  },
  celular:{
    type: String,
    minlength: 7
  },
  carrera:{
    type: String,
  },
  proyectos:{
    type: [mongoose.Schema.Types.ObjectId],
  },
  creacion: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('User', userSchema);