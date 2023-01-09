import { createContext, useState, useEffect } from "react";

export const I18nContext = createContext({})

export function I18nContextProvider(props) {
  const [currentLanguage, setCurrentLanguage] = useState("pt-BR")

  const translations = {
    "pt-BR": {
      home: "Inicio"
    },
    "en": {
      home: "Home"
    }
  }

  useEffect(() => {
    const lang = localStorage.getItem("@lang")
    if (lang) {
      setCurrentLanguage(lang)
    } else {
      setCurrentLanguage(navigator.language)
      localStorage.setItem("@lang", navigator.language)
    }
  }, [])

  return (
    <I18nContext.Provider value={{
      currentLanguage, setCurrentLanguage, translations
    }}>
      {props.children}
    </I18nContext.Provider>
  )
}