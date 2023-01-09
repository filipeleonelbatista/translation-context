import { useI18n } from '../hooks/useI18n'
import './Switch.css'

export default function Switch() {
  const { currentLanguage, setCurrentLanguage } = useI18n()

  return (
    <div className="container">
      <label className="switch">
        <input type="checkbox"
          onChange={(event) => {
            setCurrentLanguage(event.target.checked ? 'en' : 'pt-BR')
            localStorage.setItem("@lang", event.target.checked ? 'en' : 'pt-BR')
          }}
          checked={currentLanguage === 'en'}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}