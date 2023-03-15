import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import app from "../../app.json";


const UsuariosCrear = () => {
    const {APIHOST}= app;
    const [email, setEmail ] = useState(""); 
    const [password, setPassword] = useState("");
    const [interes, setInteres] = useState("");
  
    const GuardarDatos = (event) => {
        event.preventDefault()
    
        const usuarioActual = {
           
          email: email,
          password: password,
          interes: interes,
          
        };
        
        axios
        .post(`${APIHOST}/usuarios `,usuarioActual)
        .then((res) => { 
         const usuario = res.data;
           window.location.replace('/');    
          console.log(usuario);   
        });
        
      } 
    
  return (
    <div className="contenido-registro">      
      <Form onSubmit={GuardarDatos}>
      <h3 className='tittle-registro'>Usuarios</h3>
        <div className="division-uno">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email} onChange={ev => setEmail(ev.target.value)}            
          />
        </div>
        <div className="division-uno">
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password} onChange={ev => setPassword(ev.target.value)}
          />
        </div>
        <div className="division-uno">
          <input
            type="text"
            name="interes"
            placeholder="Interes"
            value={interes} onChange={ev => setInteres(ev.target.value)}
            
          />
        </div>
        <Button type="submit" className="btn btn-primary">
            Adicionar
        </Button>
        
      </Form>
    </div>
  )
}

export default UsuariosCrear
