import React, { createContext, useContext, useState } from 'react';

// Criação do Contexto
const LanguageContext = createContext();

// Componente Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("portugues");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para facilitar o acesso ao contexto
export const useLanguage = () => useContext(LanguageContext);