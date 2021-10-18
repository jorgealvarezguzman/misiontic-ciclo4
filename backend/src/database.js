import mongoose from "mongoose";

//Esto debe cambiarse por una variable de entorno.
//Por ahora poner el string de conexión a su base de datos local o la de atlas

mongoose.connect("mongodb+srv://admin:2UbaQaUFDetjnKH2@cluster0.2b5qk.mongodb.net/JANCE-DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err.message));