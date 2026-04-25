import type { TranslationDictionary } from './index'

export const en: TranslationDictionary = {
  appTitle: 'Profile',
  intro: 'Select a section from the left to view details.',
  languageLabel: 'Language',
  sectionsLabel: 'Sections',
  sections: {
    career: {
      label: 'Career',
      title: 'Career',
      items: [
        'Senior Software Engineer',
        'Frontend architecture and delivery',
        'Mentoring and technical leadership',
      ],
    },
    education: {
      label: 'Education',
      title: 'Education',
      items: [
        'BSc in Computer Science',
        'Continuous learning through certifications',
        'Workshops and conference talks',
      ],
    },
    nonProfit: {
      label: 'Non-profit',
      title: 'Non-profit',
      items: [
        'Volunteer coding mentor',
        'Community tech events',
        'Open-source contributions',
      ],
    },
  },
}

