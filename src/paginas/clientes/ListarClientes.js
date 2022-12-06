import React, { useEffect, useState } from 'react'
import app from "../../app.json";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

const ListarClientes = () => {
  const [listaclientes, setListaclientes ] = useState("");
  const {APIHOST}= app;

  useEffect(() => {
        axios
        .get(`${APIHOST}/clientes `)
        .then(res => { console.log(res.data)
        setListaclientes(res.data)  
        });
        console.log(listaclientes); 
 },[]);
   
  
  return (
    <Container>
    <div className='grid'>
        <h1>Lista </h1>
        <Link to={"/clientesCrear"}>Adicionar</Link>
        {listaclientes && listaclientes.map((cliente,i) => { 
          return(
            <div className='listaclientes' key={i}>
              <p><strong>Nombres:</strong> {cliente.nombres}</p>
              <p><strong>Apellidos:</strong> {cliente.apellidos}</p>
              <p><strong>Correo:</strong> {cliente.correo}</p>
              <p><strong>Cedula:</strong> {cliente.cedula}</p>
              <p><strong>Direccion:</strong> {cliente.direccion}</p>
              <p><strong>Fotocopia:</strong> {cliente.fotocopia}</p>
              <p><strong>Letra:</strong> {cliente.letra}</p>

              <Link to={"/modificar/" + cliente._id}>Modificar  </Link>
              <Link to={"/confirmacion/" + cliente._id}>Eliminar</Link>
            </div> 
            );          
         }
        )}         
     </div>
    </Container>
  )
}

export default ListarClientes
