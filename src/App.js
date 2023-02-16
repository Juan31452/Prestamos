
import './estilos/App.css';
import Menu from './componentes/Menu';
import {BrowserRouter as  Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    
    <div className="App">
    <Router>
       <Menu/>       
    </Router>
    </div>
           

  );
}

export default App;
