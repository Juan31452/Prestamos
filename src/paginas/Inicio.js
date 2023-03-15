import React  from 'react'
import { useSpring, animated } from 'react-spring';
import Login from '../Login';
const Inicio = () => {

  const animation = useSpring({
    
      from: { opacity: 0, transform: 'translateY(-50px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      config: { duration: 1000 },
    });

  return (
    <div>
   
    <animated.h1 style={animation}>BIENVENIDOS</animated.h1>

    <Login/>
  
    </div>
   


  )
}

export default Inicio
