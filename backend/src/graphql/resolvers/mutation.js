import Project from "../../models/Project";

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
    }
};

export default Mutation;