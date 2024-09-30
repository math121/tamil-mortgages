import { createContext, useState } from "react";

const LanguageContext = createContext({
  language: "tamil",
  chooseEnglish: () => {},
  chooseTamil: () => {},
});

export const LanguageProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState("tamil");

  const chooseEnglish = () => {
    console.log("ENGLISH");
    setLanguage("english");
  };

  const chooseTamil = () => {
    console.log("TAMIL");
    setLanguage("tamil");
  };

  const value = {
    language,
    chooseEnglish,
    chooseTamil,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
