"use client";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import React from "react";

const LanguageConverter: React.FC = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageConverter must be used within a LanguageProvider");
  }

  const { currentLanguage, languageConverter } = context;

  return (
    <div className="container-center">
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

      <button className="button-primary" onClick={languageConverter}>
        {currentLanguage === "English"
          ? "Switch to Spanish"
          : "Cambiar a inglés(Switch to English)"}
      </button>
    </div>
  );
};

export default LanguageConverter;
