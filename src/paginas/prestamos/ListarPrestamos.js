import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import app from "../../app.json";
import Modal from '../../componentes/Modal';
import CuotasCrear from '../cuotas/CuotasCrear';
import ListarCuotas from '../cuotas/ListarCuotas';

const ListarPrestamos = () => {
    let { id } = useParams();
    const [mostrar, setMostrar] = useState(false);
    const [mostrar1, setMostrar1] = useState(false);
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
            <p><strong>Debe:</strong> {prestamo.debe}</p>

            <Link to={"/modificarp/" + prestamo._id}>Modificar  </Link>
            <Link to={"/confirmacionPrestamo/" + prestamo._id}>Eliminar</Link>

            <button className='btn btn-success m-2' onClick={() => setMostrar(true)}>Cuota</button>
            <button className='btn btn-success m-2' onClick={() => setMostrar1(true)}>VerCuotas</button>

            <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
              <CuotasCrear
              prestamoActual={prestamo._id}
              cuotaActual={prestamo.cuota}
              debeActual={prestamo.debe}
              />              
            </Modal>

            <Modal isOpen={mostrar1} onClose={() => setMostrar1(false)}>
              <ListarCuotas
              />              
            </Modal>
                      
          </div> 
          );          
       }
      )}
      
    </div>
  )
}

export default ListarPrestamos
