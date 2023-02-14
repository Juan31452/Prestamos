import React, { useEffect, useState } from 'react'
import app from "../../app.json";
import axios from 'axios';
import Milink from '../../componentes/Milink';
import Modal from '../../componentes/Modal';
import ClientesCrear from './ClientesCrear';

const ListarClientes = () => {
  const [mostrar, setMostrar] = useState(false);
  const [listaclientes, setListaclientes ] = useState("");
  
  const {APIHOST}= app;
  const [selectedLoan, setSelectedLoan] = useState(null);
  
  const handleRowClick = cliente => {
    setSelectedLoan(cliente);
    console.log(cliente._id);
              
  };

  useEffect(() => {
        axios
        .get(`${APIHOST}/clientes `)
        .then(res => { console.log(res.data)
        setListaclientes(res.data)  
        });
        console.log(listaclientes); 
 },[]);
   
  
  return (
     <div>
        <h3>Clientes</h3>
        <button className='btn btn-success m-2' onClick={() => setMostrar(true)}>Adicionar</button>
        <div className="table">
          
        {selectedLoan ? (
          <div>
            <div className='enlace'><Milink to={`/modificar/${selectedLoan._id}`}> Modificar  </Milink> </div>
            <div className='enlace'><Milink to={`/confirmacion/${selectedLoan._id}`}>Elimina</Milink></div>
            
          </div>
        
        ) : null}
    
        <div className="table-header">
        <div className='table-cell'>Nombres </div>
        <div className='table-cell'>Apellidos </div>
        <div className='table-cell'>Correo </div>
        <div className='table-cell'>Cedula </div>
        <div className='table-cell'>Direccion </div>

      </div>  
       
        {listaclientes && listaclientes.map((cliente,i) => { 
          return(        
            <div  key={i}
            className={`table-row ${selectedLoan === cliente ? 'selected' : ''}`}
            onClick={() => handleRowClick(cliente)}
            >
            <div className='table-cell'>{cliente.nombres}</div>
            <div className='table-cell'>{cliente.apellidos}</div>
            <div className='table-cell'>{cliente.correo}</div>
            <div className='table-cell'>{cliente.cedula}</div>
            <div className='table-cell'>{cliente.direccion}</div>
            
          </div>
        
          );
        })}
    
              
             
      </div> 
        <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
          <ClientesCrear
          />              
        </Modal>
         
     </div>
   
  )
}

export default ListarClientes
