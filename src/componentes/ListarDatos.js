import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListarDatos = ({APIHOST,coleccion}) => {
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        const listaDatos = async () => {
          try {  
            const data = await axios.get(`${APIHOST}/${coleccion}`);
            setLista(data);
            console.log(APIHOST);
            console.log(coleccion);
            console.log(lista);
          } catch (error) {
            console.error(error);
          }  
        };
    
        listaDatos();
          
    }, [APIHOST]);

  
}

export default ListarDatos
