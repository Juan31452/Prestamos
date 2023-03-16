import { createContext, useState } from 'react';

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
  
  const login = async (email, interes, id) => {
    // Verificar credenciales del usuario y actualizar el estado del email y password si son válidos
      setEmail(email);
      setInteres(interes);
      setId(id);
      console.log(id);
      console.log(interes);
  };

  return (
    <ContextoUsuario.Provider value={{ email, interes, id , login }}>
      {children}
    </ContextoUsuario.Provider>
  );
};