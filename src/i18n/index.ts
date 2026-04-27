import { en } from './en'
import { sv } from './sv'

export type Locale = 'en' | 'sv'
export type SectionKey = 'about' | 'career' | 'education' | 'nonProfit' | 'techStack'

export type AboutSection = {
  label: string
  title: string
  bio: string
  portraitAlt: string
  contactLabel: string
}

export type ListSection = {
  label: string
  title: string
  items: string[]
}

export type CareerEntry = {
  employer: string
  role: string
  period: string
  logo: string
  items: string[]
}

export type CareerSection = {
  label: string
  title: string
  entries: CareerEntry[]
}

export type EducationItemGroup = { text: string; items: string[] }
export type EducationItem = string | EducationItemGroup

export type EducationEntry = {
  institution: string
  programme: string
  degree: string
  credits: string
  period: string
  logo: string
  items: EducationItem[]
}

export type EducationSection = {
  label: string
  title: string
  entries: EducationEntry[]
}

export type VoluntaryEntry = {
  organisation: string
  role: string
  period: string
  logo: string
  items?: string[]
}

export type VoluntarySection = {
  label: string
  title: string
  entries: VoluntaryEntry[]
}

export type TechStackSection = {
  label: string
  title: string
}

export type TranslationDictionary = {
  appTitle: string
  languageLabel: string
  sections: {
    about: AboutSection
    career: CareerSection
    education: EducationSection
    nonProfit: VoluntarySection
    techStack: TechStackSection
  }
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

