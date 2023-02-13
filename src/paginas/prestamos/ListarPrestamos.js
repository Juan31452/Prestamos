import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import app from "../../app.json";
import Modal from '../../componentes/Modal';
import CuotasCrear from '../cuotas/CuotasCrear';
import ListarCuotas from '../cuotas/ListarCuotas';
import  '../../estilos/grid.css'
import Milink from '../../componentes/Milink';

const ListarPrestamos = () => {
    let { id } = useParams();
    const [mostrar, setMostrar] = useState(false);
    const [mostrar1, setMostrar1] = useState(false);
    const [listaprestamos, setListaprestamos ] = useState("");
    const {APIHOST}= app;
    const [selectedLoan, setSelectedLoan] = useState(null);

  const handleRowClick = prestamo => {
    setSelectedLoan(prestamo);
    console.log(prestamo._id);
    let elid = prestamo._id;
    
            
  };
   
  
  
    useEffect(() => {
          axios
          .get(`${APIHOST}/prestamos `)
          .then(res => { console.log(res.data)
          setListaprestamos(res.data)  
          });
          console.log(listaprestamos); 
   },[]);
  
  const url =  "/modificarp/"
  return (
    
    <div className="table">
    
    {selectedLoan ? (
      <div>
        <div className='enlace'><Milink to={"/CrearPrestamos"}>Adicionar</Milink></div>    
        <div className='enlace'><Milink to={`/modificarp/${selectedLoan._id}`}>Modifica  </Milink> </div>
        <div className='enlace'><Milink to={`/confirmacionPrestamo/${selectedLoan._id}`}>Elimina</Milink></div>
        <div className='enlace'><Milink to={`/ListarCuotas/${selectedLoan._id}`} >cuotas</Milink></div>     

      </div>
     
    ) : null}
     
      <div className="table-header">
      
          <div className='table-cell'>Cliente </div>
          <div className='table-cell'>Fecha </div>
          <div className='table-cell'>Prestamo </div>
          <div className='table-cell'>Interes </div>
          <div className='table-cell'>cuota </div>
          <div className='table-cell'>Debe </div>
      </div>    
      {listaprestamos && listaprestamos.map((prestamo,i) => { 
        return(
          
          <div  key={i}
          className={`table-row ${selectedLoan === prestamo ? 'selected' : ''}`}
          onClick={() => handleRowClick(prestamo)}
          >
            <div className='table-cell'>{prestamo.cliente}</div>
            <div className='table-cell'>{prestamo.fecha}</div>
            <div className='table-cell'>{prestamo.valor_prestamo}</div>
            <div className='table-cell'>{prestamo.interes}</div>
            <div className='table-cell'>{prestamo.cuota}</div>
            <div className='table-cell'>{prestamo.debe}</div>               
                
            
          </div> 
          
          );          
       }
      )}

     
    </div>
  )
}

export default ListarPrestamos
