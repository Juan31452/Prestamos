import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import app from "../../app.json";
import { useContext } from 'react';
import { ContextoUsuario } from '../../componentes/contexto/ContextoUsuario';


const ClientesCrear = () => {
  const {APIHOST}= app;
  const [nombres, setNombres ] = useState(""); 
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [cedula, setCedula ] = useState(""); 
  const [direccion, setDireccion] = useState("");
  const { id } = useContext(ContextoUsuario);

  
  const GuardarDatos = (event) => {
    event.preventDefault()

    const usuarioActual = {
       
      nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      cedula: cedula,
      direccion: direccion,
      usuario: id, 
  
    };
    
    axios
    .post(`${APIHOST}/clientes `,usuarioActual)
    .then((res) => { 
     const usuario = res.data;
       window.location.replace('/');    
      console.log(usuario);   
    });
    
  } 
  return (
    
    <div className="contenido-registro">      
      <Form onSubmit={GuardarDatos}>
      <h3 className='tittle-registro'>Clientes</h3>
        <div className="division-uno">
          <input
            type="text"
            name="nombres"
            placeholder="Nombres"
            value={nombres} onChange={ev => setNombres(ev.target.value)}            
          />
        </div>
        <div className="division-uno">
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            value={apellidos} onChange={ev => setApellidos(ev.target.value)}
          />
        </div>
        <div className="division-uno">
          <input
            type="text"
            name="correo"
            placeholder="Correo"
            value={correo} onChange={ev => setCorreo(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          <input
            type="text"
            name="cedula"
            placeholder="Cedula"
            value={cedula} onChange={ev => setCedula(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          <input
            type="text"
            name="direccion"
            placeholder="direccion"
            value={direccion} onChange={ev => setDireccion(ev.target.value)}          />
        </div>
        <Button type="submit" className="btn btn-primary">
            Adicionar
        </Button>
        
      </Form>
     
    </div>
  );
};

export default ClientesCrear;
