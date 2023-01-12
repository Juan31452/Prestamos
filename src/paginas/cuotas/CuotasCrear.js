import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CuotasCrear = ({prestamoActual}) => {
  const [fecha, setFecha ] = useState(""); 
  const [prestamo, setPrestamo] = useState("");
  const [cuota, setCuota ] = useState(""); 
  const [interes, setInteres] = useState("");
  const [abono_capital, setAbono_capital] = useState("");
  const [saldo, setSaldo] = useState("");
  
  const calculo = () => {
    console.log(prestamoActual);
    setPrestamo(prestamoActual);
  }  
  const GuardarDatos = (event) => {

  }

  return (
    <div className="contenido-registro">    
      <Form onSubmit={GuardarDatos}>
      
        <h1 className='tittle-registro'>Cuota</h1>
        <div className="division-uno">
          <label htmlFor="lafecha">Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={fecha} onChange={ev => setFecha(ev.target.value)}
            onKeyUp = {calculo}            
          />
        </div>
        <div className="division-uno">
          <label htmlFor="elprestamo">Prestamo:</label>
          <input
            type="text"
            name="prestamo"
            value={prestamo} onChange={ev => setPrestamo(ev.target.value)}
          />
        </div>
        <div className="division-uno">
          <label htmlFor="lacuota">Cuota:</label>
          <input
            type="number"
            name="cuota"
            value={cuota} 
            onChange={ev => setCuota(ev.target.value)}
            
          />
        </div>
        <div className="division-uno">
          <label htmlFor="elinteres">Interes:</label>
          <input
            type="number"
            name="interes"
            value={interes} onChange={ev => setInteres(ev.target.value)}
          />
          </div>
          <div className="division-uno">
          <label htmlFor="elabono">Abono:</label>
          <input
            type="number"
            name="abono_capital"
            value={abono_capital} onChange={ev => setAbono_capital(ev.target.value)}
          />
          </div>
          <div className="division-uno">
          <label htmlFor="elsaldo">Saldo:</label>
          <input
            type="number"
            name="saldo"
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
