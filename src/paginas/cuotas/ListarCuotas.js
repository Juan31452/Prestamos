import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  '../../estilos/grid.css'
import app from "../../app.json";

const {APIHOST}= app;
  
const ListarCuotas = ({prestamoCliente}) => {
  const [listacuotas, setListacuotas ] = useState(null);

  useEffect(() => {
    let url = `${APIHOST}/cuotas/buscarprestamo/` + prestamoCliente
    axios
    .get(url)
    .then(res => { console.log(res.data)
      setListacuotas(res.data)  
    });
    console.log(url);
    console.log(listacuotas);
    console.log(prestamoCliente); 
},[]);

  return (
    <div className='Contenedor'>
      <div className='encabezado'>Fecha </div>
      <div className='encabezado1'>Interes </div>
      <div className='encabezado1'>Abono </div>
      <div className='encabezado1'>Saldo </div>
      <div className='encabezado1'> </div>
      <div className='encabezado1'> </div>
      {listacuotas && listacuotas.map((item,i) => {
        return(        
        <div key={i}>
          <div className='datos'>{item.fecha}</div>
          <div className='datos1'>{item.interes}</div>
          <div className='datos1'>{item.abono_capital}</div>
          <div className='datos1'>{item.saldo}</div>
          <button class="edit-button">Editar</button>
          <button class="delete-button">Eliminar</button>
        </div>
        );
      })}
  
  
      
    </div>
  ); 
}

export default ListarCuotas
