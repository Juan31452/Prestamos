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
  const [debe, setDebe] = useState("");
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
      debe: debe,
      
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
    setDebe(valor_prestamo);
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
        <h3 className='tittle-registro'>Prestamos</h3>
        <div className="division-uno">
          <input
            type="date"
            name="fecha"
            value={fecha} onChange={ev => setFecha(ev.target.value)}            
          />
        </div>
        <div className="division-uno">
          <input
            type="number"
            name="valor_prestamo"
            placeholder="Valor Prestamo"
            value={valor_prestamo} onChange={ev => setValor_prestamo(ev.target.value)}
          />
        </div>
        <div className="division-uno">
          <input
            type="number"
            name="interes"
            placeholder="Interes Ej:12"
            value={interes} 
            onChange={ev => setInteres(ev.target.value)}
            onKeyUp = {calculo}
          />
        </div>
        <div className="division-uno">
          <input
            type="number"
            name="cuota"
            placeholder="Cuota"
            value={cuota} onChange={ev => setCuota(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          
           {' '}  
           <select name = "cliente" value={cliente} onChange={ev => setCliente(ev.target.value)}>
              <option value=" " >Seleccione un Cliente...</option>             
              {listaclientes && listaclientes.map((elcliente) => (
                                
                <option key={elcliente._id} value={elcliente.nombres}>{elcliente.nombres}</option>  
                                         
                
              ))} 
            </select>  
         </div>
        <div className="division-uno">
          <input
            type="text"
            name="letra"
            placeholder="Letra"
            value={letra} onChange={ev => setLetra(ev.target.value)}           
          />
        </div>
        <div className="division-uno">
          <input
            type="text"
            name="fotocopia"
            placeholder="Fotocopia"
            value={fotocopia} onChange={ev => setFotocopia(ev.target.value)}           
          />
        </div>
        <div className="division-uno">
          <input
            type="number"
            name="debe"
            placeholder="Debe"
            value={debe} onChange={ev => setDebe(ev.target.value)}
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
