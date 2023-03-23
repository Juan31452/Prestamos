import { createContext, useEffect, useState } from 'react';

export const ContextoUsuario = createContext({
  email: '',
  interes: 0,
  id:'',
  updateEmail: () => {},
  updatePassword: () => {},
  updateId: () => {},
  login: async () => {},
});

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [interes, setInteres] = useState('');
  const [id, setId] = useState('');
  
  //const updateEmail = (newEmail) => setEmail(newEmail);
  //const updatePassword = (newPassword) => setPassword(newPassword);
  //const updateId = (newId) => setId(newId);
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedInteres = localStorage.getItem('interes');
    const storedId = localStorage.getItem('id');

    if (storedEmail && storedInteres && storedId) {
      setEmail(storedEmail);
      setInteres(storedInteres);
      setId(storedId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('email', email);
    localStorage.setItem('interes', interes);
    localStorage.setItem('id', id);
  }, [email, interes, id]);
 
  const login = async (email, interes, id) => {
    // Verificar credenciales del usuario y actualizar el estado del email y password si son válidos
      setEmail(email);
      setInteres(interes);
      setId(id);
      console.log(id);
      console.log(interes);
  };
  
  const logout = () => {
    setEmail(null);
    setInteres(null);
    setId(null);
    window.location.replace('/');
  };

  return (
    <ContextoUsuario.Provider value={{ email, interes, id , login, logout }}>
      {children}
    </ContextoUsuario.Provider>
  );
};