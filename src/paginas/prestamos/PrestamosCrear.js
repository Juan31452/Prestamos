import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import app from "../../app.json";
import axios from "axios";

const PrestamosCrear = () => {
  const [fecha, setFecha ] = useState(""); 
  const [valor_prestamo, setValor_prestamo] = useState("");
  const [interes, setInteres] = useState("");
  const [cuota, setCuota ] = useState(""); 
  const [cliente, setCliente] = useState("");
  const [pagado, setPagado] = useState("");
  const [letra, setLetra] = useState("");
  const [fotocopia, setFotocopia] = useState("");
  const [listaclientes, setListaclientes ] = useState("");
  const {APIHOST}= app;
 
  const GuardarDatos = (event) => {
    event.preventDefault()

    const prestamoActual = {
       
      fecha: fecha,
      valor_prestamo: valor_prestamo,
      interes: interes,
      cuota: cuota,
      cliente: cliente,
      letra: letra,
      fotocopia: fotocopia,
      pagado: pagado,
      
    };
    axios
    .post(`${APIHOST}/prestamos `,prestamoActual)
    .then((res) => { 
     const prestamo = res.data;
       window.location.replace('/prestamos');    
      console.log(prestamo);   
    });
    
    
  }
  
  const calculo = () => {
    let micuota = (valor_prestamo * interes)/100 ;
    console.log(micuota);
    setCuota(micuota);
    setPagado("No");
    setLetra("Si");
    setFotocopia("Si");
    //return micuota;

  }

  useEffect(() => {
    axios
    .get(`${APIHOST}/clientes `)
    .then(res => { console.log(res.data)
    setListaclientes(res.data)  
    });
    console.log(listaclientes); 
},[]);

  return (
    <div className="contenido-registro">
     <Form onSubmit={GuardarDatos}>
        <h1 className='tittle-registro'>Prestamos</h1>
        <div className="division-uno">
          <label htmlFor="lafecha">Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={fecha} onChange={ev => setFecha(ev.target.value)}            
          />
        </div>
        <div className="division-uno">
          <label htmlFor="valorprestamo">Valor Prestamo:</label>
          <input
            type="number"
            name="valor_prestamo"
            value={valor_prestamo} onChange={ev => setValor_prestamo(ev.target.value)}
          />
        </div>
        <div className="division-uno">
          <label htmlFor="elinteres">Interes:</label>
          <input
            type="number"
            name="interes"
            value={interes} 
            onChange={ev => setInteres(ev.target.value)}
            onKeyUp = {calculo}
          />
        </div>
        <div className="division-uno">
          <label htmlFor="lacuota">Cuota:</label>
          <input
            type="number"
            name="cuota"
            value={cuota} onChange={ev => setCuota(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          <label>
           Elije un cliente:
           {' '}  
           <select name = "cliente" value={cliente} onChange={ev => setCliente(ev.target.value)}>
              <option value=" " >Seleccione un Cliente...</option>             
              {listaclientes && listaclientes.map((elcliente) => (
                                
                <option key={elcliente._id} value={elcliente.nombres}>{elcliente.nombres}</option>  
                                         
                
              ))} 
            </select>  
          </label>
        </div>
        <div className="division-uno">
          <label htmlFor="laletra">Letra:</label>
          <input
            type="text"
            name="letra"
            value={letra} onChange={ev => setLetra(ev.target.value)}           
          />
        </div>
        <div className="division-uno">
          <label htmlFor="lafotocopia">Fotocopia:</label>
          <input
            type="text"
            name="fotocopia"
            value={fotocopia} onChange={ev => setFotocopia(ev.target.value)}           
          />
        </div>
        <Button type="submit" className="btn btn-primary">
          Adicionar
        </Button>
      </Form>
    </div>
  );
};

export default PrestamosCrear
