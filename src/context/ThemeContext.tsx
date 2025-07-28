"use client";
import { createContext, useState, ReactNode } from "react";

interface ThemeContextType {
  dark: boolean;
  setDark: (value: boolean) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
