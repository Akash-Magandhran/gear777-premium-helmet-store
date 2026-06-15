import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('avbar.user', null);
  const login = (email) => setUser({ email, name: email.split('@')[0] });
  const register = (name, email) => setUser({ email, name });
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
