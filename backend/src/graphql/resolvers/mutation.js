import Project from "../../models/Project";

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
    }
};

export default Mutation;