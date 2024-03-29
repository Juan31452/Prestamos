import React, { useEffect, useState } from 'react'
import app from "../../app.json";
import axios from 'axios';
import Milink from '../../componentes/Milink';
import Modal from '../../componentes/Modal';
import ClientesCrear from './ClientesCrear';
import Loading from '../../componentes/Loading';
import ListarDatos from '../../componentes/ListarDatos';
import Consultar from '../../componentes/Consultar';
import { useContext } from 'react';
import { ContextoUsuario } from '../../componentes/contexto/ContextoUsuario';

const ListarClientes = () => {
  const { id } = useContext(ContextoUsuario);
  const [mostrar, setMostrar] = useState(false);
  const [listaclientes, setListaclientes ] = useState([]);
  
  const {APIHOST}= app;
  const coleccion= 'clientes'
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleRowClick = cliente => {
    setSelectedLoan(cliente);
    console.log(cliente._id);
              
  };

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get(`${APIHOST}/clientes/buscarPorUsuario/`+ id);
        setListaclientes(response.data);
        console.log(id);
        console.log(listaclientes);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchClientes();
  }, [APIHOST]);
   
 if (isLoading) {
  return <div> <Loading /> </div>;
  }
  
  const buscarClientesPorNombre = async (consulta) => {
    try {
      const response = await axios.get(`${APIHOST}/clientes/buscarPorNombre/${consulta}`);
      setListaclientes(response.data);
      console.log(consulta);
      console.log(listaclientes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
     <div>
        <h3>Clientes</h3>
        <Consultar onBuscar={buscarClientesPorNombre}/>
        
        <div id='contenedorBotonAdiciona'>
          <button id='miboton' onClick={() => setMostrar(true)}>Adicionar</button> 
        </div>

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
        <ListarDatos APIHOST={APIHOST} coleccion={coleccion}/>
         
     </div>
   
  )
}

export default ListarClientes
