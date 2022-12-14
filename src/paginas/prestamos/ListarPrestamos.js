import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import app from "../../app.json";

const ListarPrestamos = () => {
    let { id } = useParams();
    const [listaprestamos, setListaprestamos ] = useState("");
    const {APIHOST}= app;
  
    useEffect(() => {
          axios
          .get(`${APIHOST}/prestamos `)
          .then(res => { console.log(res.data)
          setListaprestamos(res.data)  
          });
          console.log(listaprestamos); 
   },[]);
    
  return (
    <div>
      <h1>Prestamos:{id}</h1>
      <Link to={"/CrearPrestamos"}>Adicionar</Link>
      {listaprestamos && listaprestamos.map((prestamo,i) => { 
        return(
          <div className='listaclientes' key={i}>
            <p><strong>Fecha:</strong> {prestamo.fecha}</p>
            <p><strong>Valor prestamo:</strong> {prestamo.valor_prestamo}</p>
            <p><strong>Interes:</strong> {prestamo.interes}</p>
            <p><strong>Cuota:</strong> {prestamo.cuota}</p>
            <p><strong>Cliente:</strong> {prestamo.cliente}</p>
            <p><strong>Letra:</strong> {prestamo.letra}</p>
            <p><strong>Fotocopia:</strong> {prestamo.fotocopia}</p>
            <p><strong>Pagado:</strong> {prestamo.pagado}</p>
            
            
          </div> 
          );          
       }
      )}
      
    </div>
  )
}

export default ListarPrestamos
