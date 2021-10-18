import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery, useMutation} from "@apollo/react-hooks"

const GET_PROJECT = gql `
    query get_project($projectID: ID!){
        get_project(projectID:$projectID){
            _id
            nombre
            descripcion
            obj_gen
            obj_esp
            presupuesto
            f_inicial
            f_final
            estado
            usuarios {
                nombre
                f_ingreso
                f_salida
                rol
                h_trabajo
                carrera
            }
        }
    }
`;

const DELETE_PROJECT = gql`
    mutation deleteProject($projectID:ID!){
        deleteProject(projectID:$projectID){
            _id
        }
    }
`;

const Project = (props) => {
    const [deleteProject] = useMutation(DELETE_PROJECT);
    const projectId = props.match.params.projectId;
    const {loading, error, data } = useQuery(GET_PROJECT, {variables:{projectID: projectId}})
    if(loading) return <p> Cargando proyecto... </p>
    if(error) return <p> {error} </p>
    const projectData = data.get_project;
    return (
        <div className="row">
            { <div className="col-md-6 offset-md-3">
                <div key={projectData._id} className="card m-2"> 
                    <h4> {projectData.nombre} </h4>
                    <div class="container">
                        <p> Descripción: {projectData.descripcion} </p>
                    </div>
                    <div class="container">
                        <p> Objectivo General: {projectData.obj_gen} </p>
                    </div>
                    <div class="container">
                        <p> Objectivos Específicos:</p>
                        <ul>
                            {projectData.obj_esp.map((value,index) =>{
                                return <li key={index}> {value} </li>
                            })}
                        </ul>
                    </div>
                    <div class="container">
                        <p> Presupuesto: $ {projectData.presupuesto} </p>
                    </div>
                    <div class="container">
                        <p> Estado: {projectData.estado} </p>
                    </div>
                    <div class="container">
                        <p> Fecha Inicial: {new Date(projectData.f_inicial*1).toLocaleDateString()} </p>
                    </div>
                    <div class="container">
                        <p> Fecha Final: {projectData.f_final? 
                            new Date(projectData.f_final*1).toLocaleDateString():
                            'En curso'
                        } </p>
                    </div>
                    <div class="container">
                        <p> Usuarios:</p>
                        <ul>
                            {projectData.usuarios.map((value,index) =>{
                                return <li key={index}> 
                                    <p>{value.nombre} </p>
                                    <p>Fecha ingreso: {value.f_ingreso} </p>
                                    <p>Fecha salida : {value.f_salida? 
                                        new Date(projectData.f_final*1).toLocaleDateString():
                                            'En curso'}
                                    </p>
                                    <p>Rol: {value.rol}</p>
                                    <p>Horas de dedicación: {value.h_trabajo} </p>
                                </li>
                            })}
                        </ul>
                    </div>
                    <button className="btn btn-info" 
                        onClick={e => window.location.href=`/projects/${projectId}/edit`}> 
                        Editar 
                    </button>
                    <button className="btn btn-danger" 
                        onClick={async(e) => {
                            await deleteProject({variables: {projectID: projectData._id}})
                            window.location.href=`/projects/`
                        }}> 
                        Borrar 
                    </button>

                </div>
            </div>}
        </div>
    )
}

export default Project;