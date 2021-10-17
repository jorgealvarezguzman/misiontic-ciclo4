const mongoose = require('mongoose');
const crypto = require('crypto'); 


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
    minlength: 20
  },
  salt: String,
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

userSchema.methods.setPassword = function(password) { 
     
  // Creating a unique salt for a particular user 
     this.salt = crypto.randomBytes(16).toString('hex'); 
   
     // Hashing user's salt and password with 1000 iterations,    
     this.hashed_password = crypto.pbkdf2Sync(password, this.salt,  
     1000, 64, `sha512`).toString(`hex`); 
 }; 
   
 // Method to check the entered password is correct or not 
userSchema.methods.validPassword = function(password) { 
     var hash = crypto.pbkdf2Sync(password,  
     this.salt, 1000, 64, `sha512`).toString(`hex`); 
     return this.hash === hash; 
 }; 

export default mongoose.model('User', userSchema);