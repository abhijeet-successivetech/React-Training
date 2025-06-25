import LangConverter from "@/component/assignment-2/LangConverter";
import LanguageProvider from "@/context/LanguageContext";

const LanguageConverter = () => {
  return (
    <LanguageProvider>
      <p className="question">
        Q10. Develop a language switcher application using the useContext hook.
        Create a context to manage the current language (e.g., English or
        Spanish). Provide buttons to switch between languages. Use the
        useContext hook to access the current language value. Display different
        language versions of the application's content.
      </p>
      <div>
        <LangConverter />
      </div>
    </LanguageProvider>
  );
};
export default LanguageConverter;