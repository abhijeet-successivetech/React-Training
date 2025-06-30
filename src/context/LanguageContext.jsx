"use client";
import { createContext, useState } from "react";
export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languageConverter = () => {
    setCurrentLanguage((prev) => (prev === "English" ? "Spanish" : "English"));
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        languageConverter,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
