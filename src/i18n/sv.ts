import type { TranslationDictionary } from './index'

export const sv: TranslationDictionary = {
  appTitle: 'Profil',
  intro: 'Valj en sektion till vanster for att visa detaljer.',
  languageLabel: 'Sprak',
  sectionsLabel: 'Sektioner',
  sections: {
    career: {
      label: 'Karriar',
      title: 'Karriar',
      items: [
        'Senior mjukvaruutvecklare',
        'Frontend-arkitektur och leverans',
        'Mentorskap och tekniskt ledarskap',
      ],
    },
    education: {
      label: 'Utbildning',
      title: 'Utbildning',
      items: [
        'Kandidatexamen i datavetenskap',
        'Kontinuerligt larande genom certifieringar',
        'Workshops och konferensforedrag',
      ],
    },
    nonProfit: {
      label: 'Ideellt',
      title: 'Ideellt arbete',
      items: [
        'Ideell mentor inom programmering',
        'Lokala tekniktraffar i samhallet',
        'Bidrag till open source',
      ],
    },
  },
}

