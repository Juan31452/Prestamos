import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import app from "../../app.json";

const ClientesCrear = () => {
  const {APIHOST}= app;
  const [nombres, setNombres ] = useState(""); 
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [cedula, setCedula ] = useState(""); 
  const [direccion, setDireccion] = useState("");
  const [fotocopia, setFotocopia] = useState("");
  const [letra, setLetra] = useState("");

  
  const GuardarDatos = (event) => {
    event.preventDefault()

    const usuarioActual = {
       
      nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      cedula: cedula,
      direccion: direccion,
      fotocopia: fotocopia,
      letra: letra,
    };
    
    axios
    .post(`${APIHOST}/clientes `,usuarioActual)
    .then((res) => { 
     const usuario = res.data;
       window.location.replace('/clientes');    
      console.log(usuario);   
    });
    
  } 
  return (
    <div className="contenido-registro">
      <Form onSubmit={GuardarDatos}>
      <h1 className='tittle-registro'>Clientes</h1>
        <div className="division-uno">
          <label htmlFor="losnombres">Nombres:</label>
          <input
            type="text"
            name="nombres"
            value={nombres} onChange={ev => setNombres(ev.target.value)}            
          />
        </div>
        <div className="division-uno">
          <label htmlFor="losapellidos">Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={apellidos} onChange={ev => setApellidos(ev.target.value)}
          />
        </div>
        <div className="division-uno">
          <label htmlFor="elcorreo">correo:</label>
          <input
            type="text"
            name="correo"
            value={correo} onChange={ev => setCorreo(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          <label htmlFor="lacedula">Cedula:</label>
          <input
            type="text"
            name="cedula"
            value={cedula} onChange={ev => setCedula(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          <label htmlFor="ladireccion">Direccion:</label>
          <input
            type="text"
            name="direccion"
            value={direccion} onChange={ev => setDireccion(ev.target.value)}          />
        </div>
        <div className="division-uno">
          <label htmlFor="lafotocopia">Fotocopia:</label>
          <input
            type="text"
            name="fotocopia"
            value={fotocopia} onChange={ev => setFotocopia(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          <label htmlFor="laletra">Letra:</label>
          <input
            type="text"
            name="letra"
            value={letra} onChange={ev => setLetra(ev.target.value)}
          />
        </div>
          <Button type="submit" className="btn btn-primary">
            Adicionar
          </Button>
        
      </Form>
    </div>
  );
};

export default ClientesCrear;
