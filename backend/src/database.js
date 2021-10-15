import mongoose from "mongoose";

//Esto debe cambiarse por una variable de entorno.
//Por ahora poner el string de conexión a su base de datos local o la de atlas

mongoose.connect("mongodb://localhost:27019/graphqlreactdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err.message));