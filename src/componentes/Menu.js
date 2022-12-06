import React from 'react'
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../paginas/Inicio';
import CrearClientes from '../paginas/clientes/ClientesCrear'
import ListarClientes from '../paginas/clientes/ListarClientes';
import EditarCliente from '../paginas/clientes/EditarClientes';
import Confirmacion from "../componentes/Confirmacion";
import EliminarCliente from "../paginas/clientes/EliminarCliente"
import Nofound from '../paginas/Nofound'
import { PRIVATE1,PRIVATE2,PRIVATE3,PRIVATE4,PRIVATE5} from './Path';
import Layout from './Layout';

    
const Menu = () => {
  return (
    <Container>
      <Layout /> 
      <Routes>
           <Route path="/" element={<Inicio/>}></Route>
           <Route path={PRIVATE1} element={<CrearClientes/>}></Route>
           <Route path={PRIVATE2} element={<ListarClientes/>}></Route>  
           <Route path={PRIVATE3} element={<EditarCliente />}></Route>
           <Route path={PRIVATE4} element={<Confirmacion/>}></Route> 
           <Route path={PRIVATE5} element={<EliminarCliente />}></Route>
           
           <Route path="*" element={<Nofound />}></Route>
          
      </Routes>
               
    </Container>
    );        
  
}

export default Menu
