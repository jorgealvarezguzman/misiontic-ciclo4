import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from "@apollo/react-hooks"

const GET_PROJECTS = gql `
    {
        projects{
            _id
            nombre
            descripcion
            obj_gen
            estado
        }
    }
`;

const ProjectList = () => {
    const {loading, error, data } = useQuery(GET_PROJECTS)
    if(loading) return <p> Cargando mensajes... </p>
    if(error) return <p> {error.message} </p>
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    data.projects.map(({_id, nombre, descripcion, obj_gen, estado}) => (
                        <div key={_id} className="card m-2"> 
                            <h4> {nombre} </h4>
                            <p> {descripcion} </p>
                            <p> {obj_gen} </p>
                            <p> {estado} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectList;