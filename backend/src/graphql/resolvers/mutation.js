import Project from "../../models/Project";
import User from "../../models/User";

const Mutation = {

    createProject : async ( _, {
        nombre,descripcion,objetivo_general, objetivos_especificos, presupuesto,
        fecha_fin, estado, usuarios, observaciones
    }) => {
        const newProject = new Project({
            nombre,descripcion,objetivo_general, objetivos_especificos, presupuesto,
            fecha_fin, estado, usuarios, observaciones
        });
        
        return await newProject.save();
    },

    createUser: async(_, {nombre, email, password, celular, carrera}) => {
        let newUser = new User({nombre, email, celular, carrera});
        newUser.setPassword(password)
        await newUser.save();
        const response = {
            _id: newUser._id,
            nombre: newUser.nombre,
            email: newUser.email,
            celular: newUser.celular,
            carrera: newUser.carrera,
            proyectos: newUser.proyectos,
        }
        return response;
    }
};

export default Mutation;