import { createContext, useState } from 'react';

export const ContextoUsuario = createContext({
  email: '',
  password: '',
  updateEmail: () => {},
  updatePassword: () => {},
  login: async () => {},
});

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = (newEmail) => setEmail(newEmail);
  const updatePassword = (newPassword) => setPassword(newPassword);
  
  const login = async (email, password) => {
    // Verificar credenciales del usuario y actualizar el estado del email y password si son válidos
      updateEmail(email);
      updatePassword(password);
    
  };

  return (
    <ContextoUsuario.Provider value={{ email, password, updateEmail, updatePassword, login }}>
      {children}
    </ContextoUsuario.Provider>
  );
};