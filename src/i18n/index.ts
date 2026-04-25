import { en } from './en'
import { sv } from './sv'

export type Locale = 'en' | 'sv'
export type SectionKey = 'career' | 'education' | 'nonProfit'

export type TranslationDictionary = {
  appTitle: string
  intro: string
  languageLabel: string
  sectionsLabel: string
  sections: Record<
    SectionKey,
    {
      label: string
      title: string
      items: string[]
    }
  >
}

export const translations: Record<Locale, TranslationDictionary> = {
  en,
  sv,
}

export const DEFAULT_LOCALE: Locale = 'en'
export const localeValues: Locale[] = ['en', 'sv']

export function isLocale(value: string | null): value is Locale {
  return value !== null && localeValues.includes(value as Locale)
}

