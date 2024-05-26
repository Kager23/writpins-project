import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définit une interface Auth pour représenter l'état de connexion de l'utilisateur
export interface Auth {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// Crée un contexte AuthContext avec la fonction createContext
export const AuthContext = createContext<Auth>({ loggedIn: false, setLoggedIn: () => {} });

// Crée une fonction useAuth qui retourne useContext(AuthContext)
export const useAuth = () => useContext(AuthContext);

// Définit le composant AuthProvider qui fournit le contexte Auth aux composants enfants
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Utilise useState pour gérer l'état de connexion de l'utilisateur
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
