import React, { useState } from 'react';
import { gql } from 'apollo-boost'
import { useMutation } from "@apollo/react-hooks";

const CREATE_PROJECT = gql`
    mutation createProject($nombre:String!, $descripcion:String!, $obj_gen:String!,
    $obj_esp: [String], $presupuesto: Float, $f_inicial:String, 
    $f_final:String, $estado:String!, $usuarios:[ProjectUserInput], $observaciones: [ObservationAuthorInput]){
        createProject(nombre:$nombre, descripcion:$descripcion,obj_gen:$obj_gen,
            obj_esp:$obj_esp, presupuesto:$presupuesto, f_inicial:$f_inicial, f_final:$f_final, estado:$estado, usuarios:$usuarios, observaciones:$observaciones){
            _id
            nombre
        }
    }
`;

const ProjectForm = () => {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [obj_gen, setObjetivoGeneral] = useState('')
    const [presupuesto, setPresupuesto] = useState(0)
    const [estado, setEstado] = useState('')
    const [createProject] = useMutation(CREATE_PROJECT)

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={async e => {
                            e.preventDefault();
                            await createProject({variables: {nombre, descripcion, obj_gen, presupuesto, estado}})
                            window.location.href="/"
                        }}>
                            <div className="form-group mt-3">
                                <input type="text" placeholder="Nombre" className="form-control" onChange = {e => setNombre(e.target.value)} value = {nombre} />
                            </div>

                            <div className="form-group mt-3">
                                <textarea rows="2" placeholder="Descripcion" className="form-control" onChange = {e => setDescripcion(e.target.value)} value={descripcion}/>
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" placeholder="Objetivo General" className="form-control" onChange = {e => setObjetivoGeneral(e.target.value)} value = {obj_gen} />
                            </div>

                            <div className="form-group mt-3">
                                <input type="number" placeholder="Presupuesto" className="form-control" onChange = {e => setPresupuesto(parseFloat(e.target.value))} value = {presupuesto} />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" placeholder="Estado" className="form-control" 
                                onChange = {e => setEstado(e.target.value)} value = {estado}/>
                            </div>
                            <div className="mt-3 d-grid">
                                <button className="btn btn-success">
                                    Guardar Proyecto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectForm;