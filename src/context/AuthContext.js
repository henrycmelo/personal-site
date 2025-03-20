import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAdminAuthenticated') === 'true';
  });
  
  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

  // This effect syncs the state changes to localStorage
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('isAdminAuthenticated', 'true');
    } else {
      localStorage.removeItem('isAdminAuthenticated');
    }
  }, [isAuthenticated]);

  const login = (password) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);