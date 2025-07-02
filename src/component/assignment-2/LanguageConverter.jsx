"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

const LanguageConverter = () => {
  const { currentLanguage, languageConverter } = useContext(LanguageContext);

  return (
    <div className="container-center" >
      <h1
        style={{
          fontSize: "2rem",
          color: "#333",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {currentLanguage === "English"
          ? "Welcome to our application!"
          : "¡Bienvenido a nuestra aplicación!"}
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          textAlign: "center",
          marginBottom: "20px",
          maxWidth: "600px",
        }}
      >
        {currentLanguage === "English"
          ? "This is a language switcher application."
          : "Esta es una aplicación para cambiar de idioma."}
      </p>

      <button
        className="button-primary"
        onClick={languageConverter}
        
      >
        {currentLanguage === "English"
          ? "Switch to Spanish"
          : "Cambiar a inglés(Switch to English)"}
      </button>
    </div>
  );
};
export default LanguageConverter;
