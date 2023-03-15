import React, { useState } from 'react'
import './estilos/login.css';
import { Link } from "react-router-dom";
import app from "./app.json";
import axios from 'axios';
//import { useAuthContext } from "./componentes/contexto/authContext";
import { useContext } from 'react';
import { ContextoUsuario } from './componentes/contexto/ContextoUsuario';

const Login = () => {
     //const {login} = useAuthContext();
     const [error, setError] = useState(null);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const { login } = useContext(ContextoUsuario);

    const {APIHOST}= app;

    const CargarDatos = async (event) => {
      event.preventDefault();
      try {
        const usuarioActual = {
       
          email: email,
          password: password,
    
     
        };
        const response = await axios.get(`${APIHOST}/usuarios `,usuarioActual)
        
       
        if (response.data) {
          await login(email, password);  // pasar el email y password al método login del contexto 
        } else {
          setError("Credenciales inválidas");
          console.log("Credenciales inválidas");
        }    
        
      } catch (error) {
        setError(error.message);
      }
    
    
      

      //console.log('Email:', email);
      //console.log('Password:', password);
      // Aquí puedes enviar los datos a un servidor o hacer cualquier otra acción necesaria
     
   
      // if(res.data=''){
      //alert("Usuario o Contraseña invalidos");
     
          //console.log(email);
      //}else{
      // console.log(usuario)
      //login();
        //window.location.replace('/VerAgricultor');    
      //}  

    
    
   
    };

  return (
    <div className='contenedorForm'>
      <form className="login-form" onSubmit={CargarDatos}>
       
          <label htmlFor="email">Correo electrónico:</label>
          <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
        
        
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="submit-btn" type="submit">Iniciar sesión</button>
      </form>
      <div className="contenedorEnlace">
        <p><Link className="enlace"  to="/UsuarioCrear"> Registrate</Link></p>
      </div>
    </div>
  );
}

export default Login
