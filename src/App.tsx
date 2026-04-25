import { useEffect, useMemo, useState } from 'react'
import './App.css'
import {
  DEFAULT_LOCALE,
  isLocale,
  translations,
  type Locale,
  type SectionKey,
} from './i18n'

const LANGUAGE_QUERY_PARAM = 'lang'
const LANGUAGE_STORAGE_KEY = 'whoami.language'
const SECTION_ORDER: SectionKey[] = ['career', 'education', 'nonProfit']

function getInitialLanguage(): Locale {
  const params = new URLSearchParams(window.location.search)
  const urlLanguage = params.get(LANGUAGE_QUERY_PARAM)

  if (isLocale(urlLanguage)) {
    return urlLanguage
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (isLocale(storedLanguage)) {
    return storedLanguage
  }

  return DEFAULT_LOCALE
}

function App() {
  const [language, setLanguage] = useState<Locale>(getInitialLanguage)
  const [activeSection, setActiveSection] = useState<SectionKey>('career')

  const t = translations[language]
  const section = useMemo(() => t.sections[activeSection], [activeSection, t])

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)

    const params = new URLSearchParams(window.location.search)
    if (params.get(LANGUAGE_QUERY_PARAM) !== language) {
      params.set(LANGUAGE_QUERY_PARAM, language)
      const nextSearch = params.toString()
      const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ''}${window.location.hash}`
      window.history.replaceState(null, '', nextUrl)
    }
  }, [language])

  useEffect(() => {
    const onPopState = () => {
      const urlLanguage = new URLSearchParams(window.location.search).get(LANGUAGE_QUERY_PARAM)
      if (isLocale(urlLanguage)) {
        setLanguage(urlLanguage)
      }
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <h1>{t.appTitle}</h1>
          <p className="intro-text">{t.intro}</p>
        </div>

        <div className="language-picker">
          <label htmlFor="language-select">{t.languageLabel}</label>
          <select
            id="language-select"
            value={language}
            onChange={(event) => setLanguage(event.target.value as Locale)}
          >
            <option value="en">English</option>
            <option value="sv">Svenska</option>
          </select>
        </div>

        <nav aria-label={t.sectionsLabel}>
          <h2>{t.sectionsLabel}</h2>
          <ul>
            {SECTION_ORDER.map((key) => (
              <li key={key}>
                <button
                  type="button"
                  className={activeSection === key ? 'active' : ''}
                  onClick={() => setActiveSection(key)}
                >
                  {t.sections[key].label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="content">
        <h2>{section.title}</h2>
        <ul>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
