import { useContext } from "react";
import { I18nContext } from "../context/I18nContext";

export function useI18n() {
  const value = useContext(I18nContext)
  return value
}