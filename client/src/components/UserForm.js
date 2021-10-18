import React, { useState } from 'react';
import { gql } from 'apollo-boost'
import { useMutation } from "@apollo/react-hooks";

const CREATE_USER = gql`
    mutation createUser($nombre:String!, $email:String!, $password:String!, $celular:String, 
        $carrera:String){
        createUser(nombre:$nombre, email:$email, password:$password, celular:$celular, 
            carrera:$carrera){
            _id
            email
        }
    }
`;

const UserForm = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [celular, setCelular] = useState('')
    const [carrera, setCarrera] = useState('')
    const [createUser] = useMutation(CREATE_USER)

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={async e => {
                            e.preventDefault();
                            await createUser({variables: {nombre, email, password, celular, carrera}})
                            window.location.href="/users"
                        }}>
                            <div className="form-group mt-3">
                                <input type="text" placeholder="Nombre" className="form-control" onChange = {e => setNombre(e.target.value)} value = {nombre} />
                            </div>
                            <div className="form-group mt-3">
                                <input type="email" placeholder="Email" className="form-control" onChange = {e => setEmail(e.target.value)} value = {email} />
                            </div>

                            <div className="form-group mt-3">
                                <input type="password" placeholder="Password" className="form-control" onChange = {e => setPassword(e.target.value)} value = {password} />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" placeholder="Celular" className="form-control" onChange = {e => setCelular(e.target.value)} value = {celular} />
                            </div>

                            <div className="form-group mt-3">
                                <input type="text" placeholder="Carrera" className="form-control" onChange = {e => setCarrera(e.target.value)} value = {carrera} />
                            </div>

                            <div className="mt-3 d-grid">
                                <button className="btn btn-success">
                                    Guardar Usuario
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm;