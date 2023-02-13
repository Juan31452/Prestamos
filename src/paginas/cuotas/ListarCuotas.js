import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  '../../estilos/grid.css'
import app from "../../app.json";
import { useParams } from 'react-router-dom';

const {APIHOST}= app;
  
const ListarCuotas = () => {
  const [listacuotas, setListacuotas ] = useState("");
  let { id } = useParams();

  useEffect(() => {
    let url = `${APIHOST}/cuotas/buscarprestamo/` + id;
    axios
    .get(url)
    .then(res => { console.log(res.data)
      setListacuotas(res.data)  
    });
    console.log(url);
    console.log(listacuotas);
    console.log(id); 
},[]);

  return (
    <div className="table">
            
      <div className="table-header">
      <div className='encabezado'>Fecha </div>
      <div className='encabezado'>Interes </div>
      <div className='encabezado'>Abono </div>
      <div className='encabezado'>Saldo </div>
    </div>  
      {listacuotas && listacuotas.map((item,i) => {
        return(        
        <div className='table-row' key={i}>
          <div className='datos'>{item.fecha}</div>
          <div className='datos'>{item.interes}</div>
          <div className='datos'>{item.abono_capital}</div>
          <div className='datos'>{item.saldo}</div>
          
        </div>
       
        );
      })}
  
      
      
    </div>
  ); 
}

export default ListarCuotas
