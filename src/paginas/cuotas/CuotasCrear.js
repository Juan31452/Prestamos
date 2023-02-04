import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import app from "../../app.json";
import { useParams } from 'react-router-dom';


const CuotasCrear = ({prestamoActual, cuotaActual, debeActual}) => {
  const [fecha, setFecha ] = useState(""); 
  const [prestamo, setPrestamo] = useState("");
  const [interes, setInteres] = useState("");
  const [abono_capital, setAbono_capital] = useState("");
  const [saldo, setSaldo] = useState("");
  const {APIHOST}= app;
  let { id } = useParams();
  
  const calculo = () => {
    
    
    setPrestamo(prestamoActual);
    let valorInteres = (debeActual * 6)/100; 
    setInteres(valorInteres);
    let capital = (cuotaActual-valorInteres);
    setAbono_capital(capital);
    let total = (debeActual-capital);
    setSaldo(total); 
    
    console.log(prestamoActual);
    console.log(debeActual);
    console.log(cuotaActual);
    console.log(valorInteres);
    console.log(capital); 
    console.log(total);

  }  

  const GuardarDatos = (event) => {
    event.preventDefault()

    const cuotaActual = {
       
      fecha: fecha,
      prestamo: prestamo,
      interes: interes,
      abono_capital: abono_capital,
      saldo: saldo,
          
    };
    
    const usuarioActual = {
      debe: saldo,
    };

    axios
    .post(`${APIHOST}/cuotas `,cuotaActual)
    .then((res) => { 
     const cuotas = res.data;
     console.log(cuotas);   
     console.log(prestamo);
    });

    let url = `${APIHOST}/prestamos/` + prestamo;
    axios.put(url, usuarioActual).then((res) => {
      console.log(usuarioActual);
      console.log(url);
      console.log(res.data);
      console.log("OK");
    
      
    });
  
     window.location.replace('/prestamos');    
          

  }

  return (
    
    <div className="contenido-registro1">    
      <Form onSubmit={GuardarDatos}>
      
        <h1 className='tittle-registro1'>Cuota</h1>
        <div className="division-uno1">
          <input
            type="date"
            name="fecha"
            value={fecha} onChange={ev => setFecha(ev.target.value)}
            onKeyUp = {calculo}            
          />
        </div>
        <div className="division-uno1">
          <input
            type="hidden"
            name="prestamo"
            placeholder="Prestamo"
            value={prestamo} onChange={ev => setPrestamo(ev.target.value)}
          />
        </div>
        <div className="division-uno1">
          <input
            type="number"
            name="interes"
            placeholder="Interes"
            value={interes} onChange={ev => setInteres(ev.target.value)}
          />
          </div>
          <div className="division-uno1">
          <input
            type="number"
            name="abono_capital"
            placeholder="Abono Capital"
            value={abono_capital} onChange={ev => setAbono_capital(ev.target.value)}
          />
          </div>
          <div className="division-uno1">
          <input
            type="number"
            name="saldo"
            placeholder="Saldo"
            value={saldo} onChange={ev => setSaldo(ev.target.value)}
          />
        </div>
        
          <Button type="submit" className="btn btn-primary">
            Adicionar
          </Button>
        </Form>

      </div>    
  )
}

export default CuotasCrear
