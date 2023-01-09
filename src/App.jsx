import './App.css'
import Switch from './components/Switch'
import { useI18n } from './hooks/useI18n'

export default function App() {
  const { currentLanguage, translations } = useI18n()
  return (
    <div className="App">
      <Switch />
      <h1>{translations[currentLanguage].home}</h1>
    </div>
  )
}