import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  //false=dark, true=light
  const [theme, setTheme] = useState(false);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, theme, setTheme}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);