import React, { useState } from 'react'
import './estilos/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      // Aquí puedes enviar los datos a un servidor o hacer cualquier otra acción necesaria
    };

  return (
    <div className='contenedorForm'>
      <form className="login-form" onSubmit={handleSubmit}>
       
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        
        
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="submit-btn" type="submit">Iniciar sesión</button>
      </form>
      <h5>Registrate</h5>
    </div>
  );
}

export default Login
