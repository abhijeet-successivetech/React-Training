"use client";
import { createContext, useState, ReactNode } from "react";

interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  languageConverter: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
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
