import React from 'react'
import grilla from '../estilos/grid.css'

const Grid = ({children}) => {
  return (
    <div className='grid'>
    
    {React.Children.map(children, child => (
      <div className={`${grilla.cell} ${grilla.header}`}> 
         {child}
      </div>
    ))}
      
    </div>
  )
}

export default Grid
