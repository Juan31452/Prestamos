import axios from 'axios';
import React, { useEffect, useState } from 'react'
import app from "../../app.json";
import Modal from '../../componentes/Modal';
import PrestamosCrear from './PrestamosCrear';
import  '../../estilos/grid.css'
import Loading from '../../componentes/Loading';
import Milink from '../../componentes/Milink';

const ListarPrestamos = () => {
    const [mostrar, setMostrar] = useState(false);
    const [listaprestamos, setListaprestamos ] = useState("");
    const {APIHOST}= app;
    const [isLoading, setIsLoading] = useState(true);
    const [selectedLoan, setSelectedLoan] = useState(null);

  const handleRowClick = prestamo => {
    setSelectedLoan(prestamo);
    console.log(prestamo._id);
              
  };
   
    
    useEffect(() => {
      const fetchPrestamos = async () => {
        try {
          const response = await axios.get(`${APIHOST}/prestamos`);
          setListaprestamos(response.data);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      };
  
      fetchPrestamos();
    }, [APIHOST]);
  
   if (isLoading) {
    return <div> <Loading /> </div>;
    }

  return (
    <div>
    
      <button className='btn btn-success m-2' onClick={() => setMostrar(true)}>Adicionar</button>
        
      <div className="table">
      
      {selectedLoan ? (
        <div>
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
      <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
        <PrestamosCrear
        />              
      </Modal>
   
    </div> 
  )
}

export default ListarPrestamos
