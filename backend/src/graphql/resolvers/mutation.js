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
    },

    deleteProject: async(_, {projectID}) => {
        return await Project.findByIdAndDelete(projectID);
    },

    editProject : async ( _, { _id,
        nombre,descripcion,obj_gen, obj_esp, presupuesto, f_inicial,
        f_final, estado, usuarios, observaciones
    }) => {
        if(f_inicial) f_inicial=  new Date(f_inicial);
        if(f_final) f_final=  new Date(f_final);
        return await Project.findByIdAndUpdate(_id, 
            {nombre,descripcion,obj_gen, obj_esp, presupuesto, f_inicial,
                f_final, estado, usuarios, observaciones})
    },

    editUser : async ( _, { _id, nombre, email, celular, carrera}) => {
        return await User.findByIdAndUpdate(_id, 
            {nombre, email, celular, carrera});
    },

    deleteUser: async(_, {userID}) => {
        return await User.findByIdAndDelete(userID);
    },
};

export default Mutation;