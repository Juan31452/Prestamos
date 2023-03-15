import React from 'react'
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../paginas/Inicio';
import CrearClientes from '../paginas/clientes/ClientesCrear'
import ListarClientes from '../paginas/clientes/ListarClientes';
import EditarCliente from '../paginas/clientes/EditarClientes';
import Confirmacion from "../componentes/Confirmacion";
import EliminarCliente from "../paginas/clientes/EliminarCliente";
import ListarPrestamos from "../paginas/prestamos/ListarPrestamos";
import PrestamosCrear from '../paginas/prestamos/PrestamosCrear';
import EditarPrestamos from '../paginas/prestamos/EditarPrestamos';
import ConfirmacionPrestamo from "../componentes/ConfirmacionPrestamo";
import EliminarPrestamos from '../paginas/prestamos/EliminarPrestamos';
import CuotasCrear from "../paginas/cuotas/CuotasCrear";
import ListarCuotas from '../paginas/cuotas/ListarCuotas';
import UsuariosCrear from '../paginas/usuarios/UsuariosCrear';
import Nofound from '../paginas/Nofound'
import { PRIVATE1,PRIVATE2,PRIVATE3,PRIVATE4,PRIVATE5,PRIVATE6,PRIVATE7,PRIVATE8,PRIVATE9,PRIVATE10,
  PRIVATE11,PRIVATE12,PRIVATE13} from './Path';
import Layout from './Layout';

    
const Menu = () => {
  return (
    <Container>
      <Layout />
       
      <Routes>
           <Route path="/" element={<Inicio/>}></Route>
           <Route path="/UsuarioCrear" element={<UsuariosCrear/>}></Route>
           <Route path={PRIVATE1} element={<CrearClientes/>}></Route>
           <Route path={PRIVATE2} element={<ListarClientes/>}></Route>  
           <Route path={PRIVATE3} element={<EditarCliente />}></Route>
           <Route path={PRIVATE4} element={<Confirmacion/>}></Route> 
           <Route path={PRIVATE5} element={<EliminarCliente />}></Route>
           <Route path={PRIVATE6} element={<ListarPrestamos />}></Route>
           <Route path={PRIVATE7} element={<PrestamosCrear />}></Route>
           <Route path={PRIVATE8} element={<ListarPrestamos />}></Route>
           <Route path={PRIVATE9} element={<EditarPrestamos />}></Route>
           <Route path={PRIVATE10} element={<EliminarPrestamos />}></Route>   
           <Route path={PRIVATE11} element={<ConfirmacionPrestamo/>}></Route> 
           <Route path={PRIVATE12} element={<CuotasCrear />}></Route>
           <Route path={PRIVATE13} element={<ListarCuotas />}></Route>
            
           <Route path="*" element={<Nofound />}></Route>
          
      </Routes>
               
    </Container>
    );        
  
}

export default Menu
