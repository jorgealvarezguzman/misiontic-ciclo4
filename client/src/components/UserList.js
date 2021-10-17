import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from "@apollo/react-hooks"

const GET_USERS = gql `
    {
        users{
            _id
            nombre
            email
            celular
            carrera
            proyectos
        }
    }
`;

const ProjectList = () => {
    const {loading, error, data } = useQuery(GET_USERS)
    if(loading) return <p> Cargando lista de usuarios... </p>
    if(error) return <p> {error.message} </p>
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    data.users.map(({_id, nombre, email, celular, carrera, proyectos}) => (
                        <div key={_id} className="card m-2"> 
                            <h4> {nombre} </h4>
                            <div class="container">
                                <p > Correo: {email} </p>
                            </div>
                            <div class="container">
                                <p> Celular: {celular} </p>
                            </div>
                            <div class="container">
                                <p> Carrera: {carrera} </p>
                            </div>
                            <div class="container">
                                <p> Proyectos: {proyectos} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectList;