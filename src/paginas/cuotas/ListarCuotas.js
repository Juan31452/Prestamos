import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  '../../estilos/grid.css'
import app from "../../app.json";
import { useParams } from 'react-router-dom';
import Modal from '../../componentes/Modal';
import CuotasCrear from './CuotasCrear';
const {APIHOST}= app;
  
const ListarCuotas = () => {
  const [mostrar, setMostrar] = useState(false);   
  const [listacuotas, setListacuotas ] = useState("");
  let { id } = useParams();
  const [selectedLoan, setSelectedLoan] = useState(null);
  
  const handleRowClick = cuota => {
    setSelectedLoan(cuota);
    console.log(cuota._id);
              
  };
  
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
    <div>
      <button className='btn btn-success m-2' onClick={() => setMostrar(true)}>Adicionar</button>
    
      <div className="table">
              
        <div className="table-header">
        <div className='table-cell'>Fecha </div>
        <div className='table-cell'>Interes </div>
        <div className='table-cell'>Abono </div>
        <div className='table-cell'>Saldo </div>
      </div>  
        {listacuotas && listacuotas.map((item,i) => {
          return(        
            <div  key={i}
            className={`table-row ${selectedLoan === item ? 'selected' : ''}`}
            onClick={() => handleRowClick(item)}
            >
            <div className='table-cell'>{item.fecha}</div>
            <div className='table-cell'>{item.interes}</div>
            <div className='table-cell'>{item.abono_capital}</div>
            <div className='table-cell'>{item.saldo}</div>
            
          </div>
        
          );
        })}
    
        
        
      </div>
      <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
        <CuotasCrear
        prestamoActual={id}
        />              
      </Modal>

    </div>
  ); 
}

export default ListarCuotas
