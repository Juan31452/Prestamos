import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import app from "../../app.json";
import mialerta from 'sweetalert';

const EditarClientes = () => {
  const [nombres, setNombres ] = useState(""); 
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [cedula, setCedula ] = useState(""); 
  const [direccion, setDireccion] = useState("");
  const [fotocopia, setFotocopia] = useState("");
  const [letra, setLetra] = useState("");
  const {APIHOST}= app;

  let { id } = useParams();

    useEffect(() => {
      console.log(id); 

      console.log(id);
      axios.get(`${APIHOST}/clientes/`+ id)
      .then(res => {console.log(res)
        setNombres(res.data.nombres);
        setApellidos(res.data.apellidos);
        setCorreo(res.data.correo);
        setCedula(res.data.cedula);
        setDireccion(res.data.direccion);
        setFotocopia(res.data.fotocopia);
        setLetra(res.data.letra);
        console.log(nombres); 
                   
      });
    },[])
    
    const MostrarAlerta = () => {
      mialerta({
        title:"Clientes",
        text:"Registro Modificado",
        icon: "success",
        button:"Aceptar"
      }).then(res => {
        window.location.replace('/clientes');
      })
    }
   
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
    
    let url = `${APIHOST}/clientes/` + id;
      axios.put(url,usuarioActual)
        .then(res => {console.log(url)
        console.log(res.data);
        console.log("Modificado")
        MostrarAlerta();   
        })

  } 
  return (
    <div>
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
          Guardar
        </Button>
      
    </Form>

    </div>
  )
}

export default EditarClientes