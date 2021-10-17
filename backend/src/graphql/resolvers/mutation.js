import Project from "../../models/Project";
import User from "../../models/User";

const Mutation = {

    createProject : async ( _, {
        nombre,descripcion,obj_gen, obj_esp, presupuesto,
        f_final, estado, usuarios, observaciones
    }) => {
        const newProject = new Project({
            nombre,descripcion,obj_gen, obj_esp, presupuesto,
            f_final, estado, usuarios, observaciones
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